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