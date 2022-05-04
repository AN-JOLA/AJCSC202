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