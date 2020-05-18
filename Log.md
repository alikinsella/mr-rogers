# Log

## Specifications

#### Spec 
* Behavior: Form takes input from the user and prints it on the page
* Input example: "Test"
* Output example: "Test"
- [x] ✔ 7:17 PM


#### Spec 
* Behavior: The program returns a range of numbers from 0 to the users inputted number
* Input example: 4
* Output example: 0, 1, 2, 3, 4
- [x] ✔ 7:54 PM
- _Notes_: Started out by trying to return each number, but the function only returned `0` since a `return` stops the function immediately. Could not figure out how to return the number and place it in the div after every iteration, but it finally clicked that I should be putting the numbers in an array. Time to write the exceptions!

#### Spec 
* Behavior: If the user input is a 3, then the program prints out "Won't you be my neighbor?"
* Input example: 3
* Output example: "Won't you be my neighbor?"
- [x] ✔ 8:01 PM
- _Notes_: Added an if else statement that pushes "Won't you be my neighbor?" to the array if the number is 3

#### Spec 
* Behavior: If the user input is a 2, then the program prints out "Boop!"
* Input example: 2
* Output example: "Boop!"
- [x] ✔ 8:05 PM
- _Notes_: Added to the if else statement

#### Spec 
* Behavior: If the user input is a 1, then the program prints out "Beep!"
* Input example: 1
* Output example: "Beep!"
- [x] ✔ 8:05 PM
- _Notes_: Added to the if else statement

#### Spec 
* Behavior: If the user input is a multi-number number that includes a 3, the the program prints out "Won't you be my neighbor!"
* Input example: 13 or 23
* Output example: "Boop!"
- [x] ✔ 10:26 PM
- _Notes_: First thought is to add the `string.includes()` method. Turns out that this method does not work on numbers, so I needed to turn the variable into a string with `String()`.

#### Spec 
* Behavior: If the user input is a multi-number number that includes a 2, the the program prints out "Boop!"
* Input example: 12 or 22
* Output example: "Boop!"
- [x] ✔ 10:26 PM
- _Notes_: First thought is to add the `string.includes()` method. Turns out that this method does not work on numbers, so I needed to turn the variable into a string with `String()`.

#### Spec 
* Behavior: The program allows the user to put in another number and see new results
* Input example: New number
* Output example: New results

#### Spec 
* Behavior: The program only takes numbers
* Input example: "string"
* Output example: 