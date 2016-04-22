var myRec = new p5.SpeechRec();

function setup() {

    // Background
    createCanvas(800, 400);
    background(color('#000000'));
    fill(255, 255, 255, 255);

    // Instructions
    textSize(32);
    textAlign(CENTER);
    text('Say the name of a colour', width / 2, height / 2);
    myRec.continuous = true; // Do continuous recognition

    // myRec.interimResults = true; // Allow partial recognition (faster, less accurate)
    myRec.onResult = showResult;
    myRec.start();
}

function draw() {}

function showColor(colorName) {
	var colors = {
		'red': '#FF0000',
		'yellow': '#FFFF00',
		'blue': '#0000FF',
		'orange': '#FFA500',
		'purple': '#800080',
		'green': '#00FF00'
	}
	if (colors[colorName]) {
		background(color(colors[colorName]));
	} else {
		background(color('#000000'));
	}
}

function showResult() {
    if (myRec.resultValue === true) {

    	showColor(myRec.resultString.toLowerCase());
        text(myRec.resultString, width / 2, height / 2);
    }
}