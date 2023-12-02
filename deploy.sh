#!/bin/bash

username=zafuzi
gameName=idlescraps

clean=f
publish=f
status=f
zip=f

while test $# != 0
do
    case "$1" in
    -c) clean=t ;;
    -p) publish=t ;;
    -s) status=t ;;
    -z) zip=t ;;
    esac
    shift
done

if [[ $clean == t ]]; then
  echo "removing old 'dist' ..."
  rm -rf dist
fi

echo "creating 'dist' ..."
mkdir -p dist

cp static/index.html dist
cp static/*.js dist
cp -rL static/data dist
cp -rL static/components dist

if [[ $publish == t ]]; then
  echo "publishing to itch.io ..."
  butler push dist $username/$gameName:html5
fi

if [[ $zip == t ]]; then
  echo "creating dist.zip"
  rm dist.zip
  zip -r dist.zip dist;
fi

if [[ $publish == t ]]; then
  echo "publishing to itch.io ..."
  butler push dist.zip $username/$gameName:html5
fi

if [[ $status == t ]]; then
  echo "checking status on itch.io ..."
  butler status $username/$gameName:html5
fi