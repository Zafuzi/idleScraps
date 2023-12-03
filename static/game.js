function loop()
{
	tick();
	render();
	window.requestAnimationFrame(loop);
}

function tick() {
	State.tick++;
	if(State.isCollectingScraps && State.tick % 60 === 0)
	{
		State.resources.scraps += 1;
	}
}

function render() {
	Templates.resourcesRibbon.render(State.resources);
}

window.requestAnimationFrame(loop);