# Geography Quiz 
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
<br>
This webpage is a Geography Quiz! The quiz functions using JavaScript to generate questions, compare values for answers, and keep the quiz running. It begins with a start button that takes users to the first question and begins a timer. When answers are incorrect it subtracts time from the timer. If the timer reaches zero you fail the quiz, with a score of zero. However if you pass the quiz with time left, your score will be equal to the amount of time left. Once the quiz is finished the user will be brought to a page displaying their score along with a list of their previous high scores.

There are only five questions so I hope you get them right!
  
<br>

![exampleGif](https://github.com/joshglugatch/password-generator/blob/master/Assets/generator.gif?raw=true)

<br>

## Built With
* JavaScript
* HTML
* CSS

## Features
There are 3 main parts to the quiz. It begins with a "begin" page with a button, and then moves onto the actual quiz content. Finally it reaches the "High Scores" page where the user can keep log of their scores. 

## Code Example
Here is the code that allows the user to choose which character types they would like in their generated password. If they choose a type of character, it adds those values to a new string to be randomly chosen from. The critChoice variable ensures that one of each character type chosen by the user is added to the final password by placing a character type in the beginning of the string.

<br>  

![criteria](https://github.com/joshglugatch/password-generator/blob/master/Assets/criteriascreenshotNEW.png?raw=true)

<br>
Added a string shuffler to my final password to prevent the user criteria choices from being the first four characters of the password string.
<br>

![shuffler](https://github.com/joshglugatch/password-generator/blob/master/Assets/shuffle.png?raw=true)

This line of code was found on Stack Overflow.

<br>

# Deployed Link:
https://joshglugatch.github.io/password-generator/

<br>

# Repository Link:
https://github.com/joshglugatch/password-generator

<br>

### Author:
Josh Glugatch  

[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/joshglugatch)
<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/joshua-glugatch)

### Credits:
Thanks to Joel Mellon on StackOverflow for the string shuffle code. 
Check out the [link to shuffle code.](https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript)
