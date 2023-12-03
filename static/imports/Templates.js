const Templates = {
	"resourcesRibbon": {
		element: sleepless.rplc8("#resourcesRibbon"),
		render(resources)
		{
			this.element.update(resources);
		}
	}
};

const Buttons = {
	"collectScraps": {
		element: sleepless.QS1("#collectScraps"),
		click()
		{
			State.isCollectingScraps = true;
		}
	},
	"stopCollectingScraps": {
		element: sleepless.QS1("#stopCollectingScraps"),
		click()
		{
			State.isCollectingScraps = false;
		}
	}
}

Object.keys(Buttons).forEach(key =>
{
	const button = Buttons[key];
	if(typeof button.click === "function") {
		button.element.addEventListener('click', button.click);
	}
})