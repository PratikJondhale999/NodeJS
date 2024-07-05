const fs = require("fs"); //Here fs is the built in module for file handling
const os = require("os");

console.log(os.cpus().length);
/*
//This is a Sync call
fs.writeFileSync("./test.txt","Hey There");
*/

/*
//Async
fs.writeFile("./test1.txt" , "Hello world", (err) => {}) //New file is generated test1 and and Hello world is printed.
*/


/*
//In Sync the result is return into the result variable
const result=fs.readFileSync("./contacts.txt","utf-8");//utf-8 is encoding which tell 
console.log(result);
*/


/*
//In Async we have to give two args(err,result).

fs.readFile("./contacts.txt","utf-8" ,(err,result) => {
    if(err){
        console.log("Error:", err);
    }else{
        console.log(result);
    }

})
*/

//Note: The Async always Expect the callbsck function
/*
fs.appendFileSync("./contacts.txt",`${Date.now()},hey there\n`);
*/

/*
//Blocking //sync
console.log("1");
const result = fs.readFileSync("./contacts.txt","utf-8"); //Here we block the result till we get the thread in thread pool.
console.log(result);
console.log("2");
*/

/*
//Non-Blocking //Async
console.log("1");
fs.readFile("contacts.txt","utf-8",(err,result) =>{
    console.log(result);
}); //Here we Don't block the result 
console.log("2");

*/

//Default Thread Pool Size = 4.
//Max Threds can have = No of Core in CPU.

