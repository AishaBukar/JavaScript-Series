// Initializing a string to a variable using the var keyword
var myName= "Aisha Bukar Awobadejo";

// One drawback of var is the fact that its value can be overridden, so, instead we use the let keyword
let myName= "Aisha Bukar Awobadejo";
console.log(myName);

//Constant values cannot be changed
const myLastName ="Bukar Awobadejo";
//Assigning numbers to variables and performing operations

let myAdd = 5 + 10.5;
let mySub = 4 - 2;
let myMult = 9 * 5;
let myDiv = 5 / 2;
let myRem = 3 % 2;

myDiv /=1;
myAdd =+1;
mySub -=5;
myMult *=4;

//Escaping literal quotes in strings (Not advisable)
const myQuote = "My name is Aisha and I am trying to \"embed a quote\" in another quote.";

const myVariable = 'Hey there, \'dont do this\'';

// Quoting strings with single quotes instead
const singleQuote= 'I am trying to embed a "double quote" in a single quote';


const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating two strings
const myString = "This is the start." + " This is the end."; 