let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");
let scoreOut = document.getElementById("score-out");

let gbBar = document.getElementById("gb-bar");
let goodBar = document.getElementById("good-bar");

let choiceCount = 0;
let goodChoiceCount = 0;
let badChoiceCount = 0;

let headshotSE = new Audio("./audio/headshot.mp3");
let heavySE = new Audio("./audio/heavy_sniper00.mp3");
let vomitSE = new Audio("./audio/vomit00.mp3");

plusButton.onclick = () => {
	choiceCount++;
	goodChoiceCount++;
	update();
	/*
	heavySE.load();
	heavySE.play();
	*/
	headshotSE.load();
	headshotSE.play();
}

minusButton.onclick = () => {
	choiceCount++;
	badChoiceCount++;
	update();
	vomitSE.load();
	vomitSE.play();
}

function update() {
	let score = (goodChoiceCount - badChoiceCount) / choiceCount;
	let out = `${goodChoiceCount - badChoiceCount}/${choiceCount}`;
	scoreOut.innerText = out;

	gbBar.style.backgroundColor = "#ff0000";
	gbBar.style.outline = "none";
	goodBar.style.width = `${score < 0 ? 0 : score*100}%`;
}
