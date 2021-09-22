let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `users`;
let whereClauses = [
 `uid = ${2+1}`,
 `OR city = ${city}`
]
let orderBy = `ORDER BY desc`;
 
// Your code to call the tag and log the return value here...
 
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(...args) {
//Your validation code here...
console.log(args)
const command = args[1].split(" ");
if(command[0] !== ("SELECT" || "UPDATE")){
    return "Only SELECT or UPDATE allowed";
}else{
const finalquery = `${command[0]}${args[2]}${args[3]}`
 return `${command[0]}${args[0][1]}${args[2]}${args[0][2]}${args[3].join(" ")} ${typeof args[4] !== "undefined" ? `${args[4]}`:"ORDER BY asc"}`; 
 }
}

const res = checkQuery`${command} FROM ${table} WHERE ${whereClauses}`;
console.log(res)