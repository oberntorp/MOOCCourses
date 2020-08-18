export const updateObject = (oldObject, newObject) =>{
    return {
        ...oldObject,
        ...newObject
    };
};

export default updateObject;

export const checkValidity = (enteredValue, validationRules) => {
    let isValid = true;
    if(validationRules){
        if(validationRules.isRequired){
            isValid = enteredValue !== "" && isValid;
        }

        if(validationRules.minLength){
            isValid = enteredValue.length >= validationRules.minLength  && isValid;
        }

        if(validationRules.maxLength){
            isValid = enteredValue.length <= validationRules.maxLength && isValid;
        }

        if ( validationRules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(enteredValue) && isValid
        }

        if(validationRules.isNumber){
            isValid = !isNaN(enteredValue) && isValid;
        }
    }

    return isValid;
}