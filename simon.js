var sequence = [];

var step = 0;

var colorHack = {
	1: "6CAD66",
	2: "F26876",
	3: "F5F547",
	4: "6878F2"
};

var Button = function(domElementId, value, sound) {
	var rootScope = this;
	this.domElement = document.getElementById(domElementId);
	this.value = value;
	this.sound = sound;
	this.flashColor = colorHack[this.value];
	this.beep = new Audio(this.sound);
	this.domElement.addEventListener("click", function(){
		rootScope.domElement.setAttribute("style", "background-color: #" + rootScope.flashColor);
		setTimeout(function(){
			rootScope.domElement.setAttribute("style", "");
		}, 500);	
 		rootScope.beep.play();
 		compareInput(rootScope.value);
 	});
};

var oneButton = new Button("one-button", 1, "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var twoButton = new Button("two-button", 2, "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var threeButton = new Button("three-button", 3, "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var fourButton = new Button("four-button", 4, "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var buttons = [oneButton, twoButton, threeButton, fourButton];

var testBeep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

var compareInput = function(number) {
	var currentStep = sequence[step];
	if(number == currentStep) {
		if(step + 1 == sequence.length) {
			step = 0;
			addStep();
		} else {
			step++;
		}
	}else{
		step = 0;
		sequence = [];
		addStep();
	}
	console.log(sequence);
};	

var addStep = function() {
	sequence.push(getRandomInt(1,4));
};

function getRandomInt(min, max) {
	return Math.floor(Math.random()* (max - min + 1)) + min
};

var startGame = function(){
	sequence = [];
	addStep(); //game starts with 1 instruction
	console.log(sequence);
};

document.getElementById("start-button").addEventListener("click", function() {
	startGame();
});

//startGame();


// var testButton = document.getElementById("test-button");
// var testFunction = function() {
// 	addStep();
// 	console.log(sequence);
// 	console.log(sequence[step]);
// 	step++;
// };

// testButton.addEventListener("click", function(){
// 	testFunction();
// });


