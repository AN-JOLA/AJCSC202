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