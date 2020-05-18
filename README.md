# Mr. Roboger's Neighborhood

#### A different take on Fizz Buzz - May 16, 2020

#### By Manny Lopez

## Description

A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

- Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
- Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
- Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

- The number 13 should be replaced with "Won't you be my neighbor?"
- The number 21 should be replaced with "Boop".
- The number 32 should be replaced with "Won't you be my neighbor?"

A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Specifications

#### Spec 
* Behavior: 
* Input example: 
* Output example: 

#### Spec 
* Behavior: Form takes input from the user and prints it on the page
* Input example: "Test"
* Output example: "Test"

#### Spec 
* Behavior: The program returns a range of numbers from 0 to the users inputted number
* Input example: 4
* Output example: 0, 1, 2, 3, 4

#### Spec 
* Behavior: If the user input is a 3, then the program prints out "Won't you be my neighbor?"
* Input example: 3
* Output example: "Won't you be my neighbor?"

#### Spec 
* Behavior: If the user input is a 2, then the program prints out "Boop!"
* Input example: 2
* Output example: "Boop!"

#### Spec 
* Behavior: If the user input is a 1, then the program prints out "Beep!"
* Input example: 1
* Output example: "Beep!"

#### Spec 
* Behavior: If the user input is a multi-number number that includes a 2, the the program prints out "Boop!"
* Input example: 12 or 22
* Output example: "Boop!"

#### Spec 
* Behavior: If the user input is a multi-number number that includes a 3, the the program prints out "Won't you be my neighbor!"
* Input example: 13 or 23
* Output example: "Boop!"

#### Spec 
* Behavior: The program allows the user to put in another number and see new results
* Input example: New number
* Output example: New results

#### Spec 
* Behavior: The program only takes numbers
* Input example: "string"
* Output example: 


## Setup/Installation Requirements

* Clone the repository
* In the root directory, run `open index.html`

## Known Bugs

No known bugs at this time

## Support and contact details

Open up a [new issue](https://github.com/mannylopez/mr-rogers/issues).

## Technologies Used

* jQuery
* Bootstrap

### License

This site is licensed under the MIT license.

Copyright (c) 2016 **_Manny Lopez_**