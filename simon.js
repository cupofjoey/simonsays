var sequence = [];
addStep(); //game starts with 1 instruction
console.log(sequence);

var step = 0;

var oneButton = document.getElementById("one-button");
var twoButton = document.getElementById("two-button");
var threeButton = document.getElementById("three-button");
var fourButton = document.getElementById("four-button");

var buttons = [oneButton, twoButton, threeButton, fourButton];

var compareInput = function(number) {
	var currentStep = sequence[step];
	if(number == currentStep) {
		console.log("Good Job!");
		addStep();
		step++;
	}else{
		console.log("Nope");
		step = 0;
	}
	console.log(sequence);
};	

 for (var i = 1; i < 5; i++) {
 	var button = buttons[i - 1];
 	(function(num){
 		button.addEventListener("click", function(){	
 			compareInput(num);
 		});
 	})(i);	
}

var addStep = function() {
	sequence.push(getRandomInt(1,4));
};

function getRandomInt(min, max) {
	return Math.floor(Math.random()* (max - min + 1)) + min
};


var dummySteps = [1, 3, 4, 2, 3, 1];


var startGame = function(){
	var step = 0;
	var currentStep = dummySteps[step];

}


//startGame();


var testButton = document.getElementById("test-button");
var testFunction = function() {
	addStep();
	console.log(sequence);
	console.log(sequence[step]);
	step++;
};

testButton.addEventListener("click", function(){
	testFunction();
});
