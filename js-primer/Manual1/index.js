//Declaring Variables
var a;
a = 10;
b = 11;
var c = 12;

console.log(a); 
console.log(b);
console.log(c);

//Mutablilty of Variables
a = 13;
console.log(a);
a = "Another value which is a string";
console.log(a);
a = true;
console.log(a);

//Primitive Datatypes e.g null & undefined
var d;
console.log(d);
a = null;
console.log(a);

//Arithmetic Ops
a = 10;
b = 20;
c = a + b;

console.log(c);
console.log(a-b);
console.log(b/a);
console.log(a*b);
console.log(b%a);
console.log(a**2);
a++;
console.log(a);
b--;
console.log(b);

//String Operations
firstName = "AJ";
lastName = "Olowokere";
fullName = firstName + " " + lastName;
console.log(fullName);

//Comparison Operations
a = 10;
a < 11;
console.log(a<11);
var test = a > 20;
console.log(test);
a >= 10;
a <= 20;
a == 10;
a === '10';
a === 10;

//Logical Operations
a = 1; 
b = 2; 
console.log(a < 3 && b < 3);  
console.log(a > 3 && b < 3);  
console.log(a > 3 || b < 3);  
console.log(!(a < 3)); 
console.log(!(a < 3) || !(b > 3));

//Ternary Or Conditional Operations
var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult);

//Bitwise Operations (~, &, |, ^, NOT, AND, OR, XOR)
5 << 1;
5 << 2;
5 << 3;
40 >> 1;
40 >> 2;
40 >> 3;

//Typeof Operator
typeof "AJ Olowokere";
typeof false;
typeof (10 + 10);
typeof 33;

// If/else statement
var minimumVotingAge = 18;
var age = 17;
if(age < minimumVotingAge)
{
    console.log("Not eligible to vote")
}
else
{
    console.log("Eligible to vote");
}

// Switch Statement
var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Sorry, day of the week numbered" + dayOfTheWeekCount + "does not exist")
        break;
}

var ageRange = "below 13"; 
switch (ageRange){ 
    case "below 1": 
        console.log("Infant"); 
        break; 
    case "below 13": 
        console.log("Pre-teen"); 
        break; 
    case "below 20": 
        console.log("Teenager"); 
        break; 
    default: 
    console.log("Adult") 
}

//For loop
for(var c = 1; c < 11; c++)
{
    console.log(c);
}

//For + Break Statement
for (var c = 1; c < 11 ; c ++)
{
    if (c == 7)
    break;
    console.log(c)
}

//For + Continue Statement
for (var c = 1; c < 11 ; c ++)
{
    if (c == 7)
    continue;
    console.log(c)
}

//While Loop
var n = 0;
while (n != 5)
{
    n = Math.floor((Math.random() * 10));
    console.log(n)
}

//Do...While loop
var x = 0;
do
{
    x += 1;
    console.log(x)
}
while(x < 10)

var readlineSync = require('readline-sync');
var answer;
do
{
    answer = readlineSync.question('What should i do?[Type "exit" for me to quit]: ');
    console.log('You asked me to ' + answer)
}
while (answer != 'exit')

//Direct Declaration can be called before or after the function declared hoisting
function addTwoNumbersA(number1, number2)
{
    return number1 + number2;
}

//By Expression can only be called after function declaration.
var addTwoNumbersB = function(number1, number2)
{
    return number1 + number2;
}

console.log(addTwoNumbersA(20, 30));
console.log(addTwoNumbersB(20, 30));

//arguments passed by value
//a function that squares a number
function square(number)
{
    number = number**2;
    return number;
}
var number = 20;
var numberSquared = square(number);
console.log(numberSquared);
console.log(number);

//arguments as array within a function
function multiplier()
{
    var product = 1;
    for (var x = 0; x < arguments.length; x++)
    {
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30));
console.log(multiplier(10,30,20));

//Scope of a Variable
var accumulatedTotal = 0;
function sum(number1, number2)
{
    var total = number1 + number2;
    accumulatedTotal = accumulatedTotal + total;
    return total;
}
console.log(sum(2,3));
console.log(sum(10,20));
console.log(accumulatedTotal);

//Array Literal
var vehicles = ["car", "lorry", "trailer"];
console.log(vehicles);

var basket = [];
console.log(basket);

var myExpressions = ["car", 2+3, 10, true];
console.log(myExpressions);

//Accessing array elements
console.log(myExpressions[0]);
console.log(myExpressions[1]);
console.log(myExpressions[2]);
console.log(myExpressions[3]);

myExpressions[3] = false;
console.log(myExpressions[3]);

var myExpressions = ["car", , 10, true];
console.log(myExpressions[1]);

//Object literal
var myObject = {
    name:{
        firstName : "AJ",
        surname : "Olowokere"
    },
    expertise : "UI/UX Design",
    languages : ["Java", "JavaScript", "C++"],
    isRetired : false,
    favouriteCombination : 2 + 7
}

console.log(myObject.name); 
console.log(myObject['name']);
console.log(myObject.expertise);  
console.log(myObject['expertise']); 
console.log(myObject.languages);  
console.log(myObject['languages']); 
console.log(myObject.isRetired); 
console.log(myObject['isRetired']); 
console.log(myObject.favouriteCombination); 
console.log(myObject['favouriteCombination']);

// Accessing nested object
console.log(myObject.name.firstName);
console.log(myObject['name']['firstName']); 

//Adding new properties
myObject.newProperty = "another property added"; 
console.log(myObject); 

//Delete and In fucntions
var phones = { 
    make: 'Samsung', 
    model: 'S7', 
    cost: 500 
    } 
    console.log('make' in phones); //Prints out true 
    delete phones.make; //Delete property phones.make 
    console.log('make' in phones); //Prints out false 



