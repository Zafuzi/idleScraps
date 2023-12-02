_______________________________________________________________________________

  
                                 TIDEPOOL

                  A starter game template using Squids.js 

_______________________________________________________________________________

## how to use
 - use the template button above to clone this repo into your own repo
 - clone the repo locally
 - run npm install
 - I recommend using a PHP server or a Node server to serve the files locally. I use php -S localhost:3000
 - visit [squids.sleepless.com](https://squids.sleepless.com) for more information on how to use the squids engine

## UNIX ONLY AUTOMATION
- Edit `deploy.sh` and change username to your itch username and gameName to your games unique id from above
- run `./deploy.sh -p` the -p flag will attempt to upload to butler
  - optionally use `./deploy.sh -c -p` the `-c` will clean your local `dist` folder before generating the new package
