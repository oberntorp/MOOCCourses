import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let classList = [];
    if(props.isInvalid && props.shouldValidate && props.touched){
        classList.push(classes.IsInvalid);
    }

    let inputElement = null;
    switch (props.elementType) {
        case "input":
            inputElement = <input className={classList.join(" ")} {...props.elementConfiguration} value={props.value} onChange={props.changed} />
            break;
        case "textarea":
            inputElement = <textarea className={classList.join(" ")} {...props.elementConfiguration} value={props.value} onChange={props.changed} />
            break;
        case "select":
            inputElement = (<select value={props.value} onChange={props.changed}>
                {props.elementConfiguration.options.map(option => {
                    return <option key={option.value} value={option.value}>{option.displayName}</option>
                })}
            </select>);
            break;          
        default:
            inputElement = <input className={classList.join(" ")} {...props.elementConfiguration} value={props.value} onChange={props.changed}/>
            break;
    }

    return(
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;