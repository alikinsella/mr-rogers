// Business logic
const rogersConverter = function(userInput) {
	let userInputPlusOne = userInput + 1
	let counter = 0;
	let answer = [];
	for (let i = 0; i < userInputPlusOne; i++) {
		let number = answer.push(counter + i);
		console.log(answer);
	}
	return answer;
}


// User interface
$(document).ready(function() {
	$("#number-to-sentence").submit(function(event) {
		event.preventDefault();

		let userInput = parseInt($("#user-input").val());
		let result = rogersConverter(userInput);
		console.log("The result is: " + result)
		$(".rogers-output").text(result);
	});
});