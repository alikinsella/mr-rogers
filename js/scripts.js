// Business logic
const rogersConverter = function(userInput) {
	let userInputPlusOne = userInput + 1

	let counter = 0;
	let answer = [];
	let number;
	
	for (let i = 0; i < userInputPlusOne; i++) {
		number = String(number)

		if (number.includes("3")) {
			number = answer.push("Won't you be my neighbor?")
		} else if (number.includes("2")) {
			number = answer.push("Boop!")
		} else if (number.includes("1")) {
			number = answer.push("Beep!")
		} else {
			number = answer.push(counter + i);
		}
	}
	return answer;
}


// User interface
$(document).ready(function() {
	$("#number-to-sentence").submit(function(event) {
		event.preventDefault();

		let userInput = parseInt($("#user-input").val());
		let result = rogersConverter(userInput);
		
		$(".rogers-output").text();
		$(".rogers-output").text(result);
	});
});