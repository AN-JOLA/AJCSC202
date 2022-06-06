var logger = (output) =>
    {
    console.log(output)
    }

    export var appName = "ES6 Review";
    export var dummyFunction = function()
    {
        return "I am a dummy function";
    }

    export default logger;

var logger = output => 
    {
    console.log(output)
    }

var functionWithNoParameter = () => 
    {
    console.log("No parameter sent")
    }

var functionWithTwoOrMoreParameters = (param1, param2) =>
    {
    console.log("This has two parameters")
    }

//Lexical Block Scoping 
export const dummyFunction = () =>{
    let feedback = "I am a dummy function";
    feedback = "I am still a dummy function";
    return feedback;
}

try{
    logger(multiplier(2));

}catch(error){
    logger(`Error : {Error message}`)
}

//static methods 
export class CustomMath{ 
    static sqrt(a){ 
    return Math.sqrt(a); 
   265
    } 
    static pow(a,b){ 
    return Math.pow(a,b); 
    } 
   }

