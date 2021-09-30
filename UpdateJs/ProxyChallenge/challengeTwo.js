const fs = require('fs');
// 2. APPLY (node only)
// You have a heavy lifting function. Every time it's called, you need to keep track in a log, but the server logs don't provide quite what you need. Write a proxy that will append to a file, the name of the function, the params sent through, and the date.

function importantFunction(){
	console.log("Important stuff here. No need to change.")
}
 
const handler = {
	apply: (target, thisArg, argsList) => {
		console.log("Applying...");
		target(argsList);
		fs.appendFile('./proxyLog.txt', `Function Name ${target.name}, Arguments: ${argsList} ${new Date()}\n\n`, (error)=>{
			if(error){
				throw error;
			}
			console.log(`Information logged: Function Name ${target.name}, Arguments: ${argsList} ${new Date()}`)
		})
	}
};

const impFuncProxy = new Proxy(importantFunction, handler);
impFuncProxy("A param");