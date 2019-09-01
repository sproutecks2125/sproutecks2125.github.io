// Welcome to the Interactive JavaScript Tutorial.
// Start by choosing a chapter and
// write your code in this window.

const theBody = document.querySelector('body');

let newElement = document.createElement('h3');
let p1 = document.createElement ('p');
newElement.textContent = 'Hi my name is Brandon also known as "Sprout"';
p1.textContent = 'This my first attempt at learning JavaScript, and embedding the code into HTML for you to see. Below are some examples of the code I am learning. On day one it was learning the syntax of differnt variables, strings, numbers, and arrays. How to print them to the screen. I also had to learn how to embed the code into this HTML file for you to see. Special thanks to Jim9112 in SNHUcoders Slack channel for helping me work this out. More to come on Day Two.';

//let p2 = document.createElement {'p');
//p2.textContent = 'Today I set out to change the sytle.css page. I started by learning some of the structure of CSS and how to correct the syntax of the CSS code.';
theBody.append(newElement);
theBody.append(p1);
//theBody.append(p2);


var myNumber = 3;                   // a number
var myNum = 4;
var myString = "Hello, World!"      // a string
var myStr = "Variables are good!"
var myBoolean = true;               // a boolean
var myBool = false;
document.body.inner = "myNumber is equal to " + myNumber;
console.log("myNum is equal to " + myNum);
console.log("myString is equal to " + myString);
console.log("myStr is equal to " + myStr);
console.log("myBoolean is equal to " + myBoolean);
console.log("myBool is equal to " + myBool);


var myArray = [];                    // an array
var myObject = {};                  // an object

var newVariable;
console.log(newVariable); //prints undefined

var emptyVariable = null;
console.log(emptyVariable);

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
console.log(myArray[1]);      // prints out 2
// Arrays are sparse.
var myArray = []
myArray[3] = "hello"
console.log(myArray);

var myArray = ["What is the meaning of life?", 42, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);