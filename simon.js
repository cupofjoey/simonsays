var sequence = [];


var testButton = document.getElementById("test-button");
var testFunction = function() {
	var oneToFour = getRandomInt(1,4);
	sequence.push(oneToFour);
	console.log(sequence);
};

testButton.addEventListener("click", testFunction);

function getRandomInt(min, max) {
	return Math.floor(Math.random()* (max - min + 1)) + min
};