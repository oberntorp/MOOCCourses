// 1. SET

// Rewrite the sample code below so that every time a property is set a callback runs. Your callback will check if the property changing is employees.

// If it is, ensure the datatype is an Array, a string, or Null. If anything else comes in, respond with an appropriate message.

// If it's not, let it pass

let manager = {
    office: `Dubai`,
    dept: `Sales`,
    employees: 0
};

const handler = {
    set: (target, propertyName, newValue) => {
        if (propertyName === "employees" && (Array.isArray(newValue) || typeof newValue === "string" || newValue == null)) {
            target.propertyName = newValue;
        } else if (propertyName === "employees" && (!Array.isArray(newValue) || typeof newValue !== "string" || newValue != null)) {
            console.log("Eployees needs to be an array, a string or null");
        } else {
            console.log("Set property other than employee...");
            target.propertyName = newValue;

        }
    }
};

const managerProxy = new Proxy(manager, handler);

managerProxy.office = `London` //updates
managerProxy.employees = [`Jim`, `Patrick`, `Marie`] //updates
managerProxy.employees = 3 // does not update
managerProxy.employees = null //updates
managerProxy.employees = {
    name: `Jim`
} //does not update