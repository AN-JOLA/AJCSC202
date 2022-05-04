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
