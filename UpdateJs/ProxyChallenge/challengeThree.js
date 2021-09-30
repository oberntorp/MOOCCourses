// 3. GET
// Adjust the following code so that anytime an internal object with accessLevel of 1 is accessed, undefined will result, regardless of the requested property.

const users = [
	{
		username: `bob`,
		accessLevel: 1,
		accessCode: 1234
	},
	{
		username: `Mary`,
		accessLevel: 2,
		accessCode: 2345
	},
	{
		username: `Harold`,
		accessLevel: 2,
		accessCode: 9999
	},
]
 
const handler = {
    get: (target, property) => {
        return target[property]["accessLevel"] === 1 ? "undefined" : target[property];
    }
};

const usersProxy = new Proxy(users, handler);
console.log(usersProxy[0].username) // undefined
console.log(usersProxy[0].accessCode) // undefined
console.log(usersProxy[1].accessCode) //2345
console.log(usersProxy[2].username) //Harold
