// import logger, {appName, dummyFunction} from './tools.js';

// logger("Welcome! We are now having fun with modularity");
// logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

// logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

import fetch from "node-fetch";
import logger from "./tools.js";
import log from './tools.js';



//PROMISES
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject feedback 
    }, 1000) 
    }).then((data) => { 
    log(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    log(`Error message received: ${error}`); 
    }).then(() =>{ 
    log(`This function is executed after success or failure is returned`) 
    }); 

logger('This message is after the last promise')

const url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url) 
 .then(response => response.json()) //convert data returned to json 
 .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
 .catch(error => log(`Error: ${error}`)); 

 const myPromiseAwareSetTimeout = (milliseconds) => 
 {
    return new Promise((resolve, reject) => 
    {
        //if(!milliseconds) reject ('Milliseconds is requiired')
        setTimeout(() => 
        {
            resolve(`Timeout is over again! I timed out for ${milliseconds} ms`);
        }, milliseconds)
    });
 }

 /*
 myPromiseAwareSetTimeout()
 .then((data) => { logger(data) })
 .catch((error) => { logger(`Error found : ${error}`) })
*/

 //try...catch within an async/await

 //declare async function that will call myPromiseAwareSetTimeout
 const useMyPromiseAwareSetTimeout = async (milliseconds) => 
 {
     try
     {
         //await cannot funstion without async
         logger(await myPromiseAwareSetTimeout(milliseconds));
     }
     catch(error)
     {
         logger(error);
     }
 };

 myPromiseAwareSetTimeout(3000)
