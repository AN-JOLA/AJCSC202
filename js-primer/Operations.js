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