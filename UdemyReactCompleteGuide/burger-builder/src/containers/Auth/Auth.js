import React, { Component } from 'react';
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Auth extends Component{
    state = {
        controls:{
            email: {
                elementType: "input",
                    elementConfiguration: {
                        type: "email",
                        placeholder: "Your Email"
                    },
                    value: "",
                    validationRules: {
                        isRequired: true
                    },
                    isValid: false,
                    isTouched: false
            },
            password: {
                elementType: "input",
                    elementConfiguration: {
                        type: "password",
                        placeholder: "Your Password"
                    },
                    value: "",
                    validationRules: {
                        isRequired: true
                    },
                    isValid: false,
                    minLength: 6,
                    isTouched: false
            }
        }    
    }

    changedValueHandler = (event, formElementId) => {
        const updatedControls = {
            ...this.state.controls,
            [formElementId]: {
                ...this.state.controls[formElementId],
                value: event.target.value,
                isValid: this.checkValidity(event.target.value, this.state.controls[formElementId].validationRules),
                isTouched: true
            }

        }

        this.setState({ controls: updatedControls });
    }

    checkValidity(enteredValue, validationRules){
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
    
            if(validationRules.isNumber){
                isValid = !isNaN(enteredValue) && isValid;
            }
        }

        return isValid;
    }

    submitAuthHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    };

    render(){
        const formElements = [];
        for(let key in this.state.controls){
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let authForm = (
            <form onSubmit={this.submitAuthHandler}>
                {formElements.map(formElement => <Input key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfiguration={formElement.config.elementConfiguration}
                value={formElement.config.value}
                changed={(event) => this.changedValueHandler(event, formElement.id)}
                isInvalid={!formElement.config.isValid}
                shouldValidate={formElement.config.validationRules}
                isTouched={formElement.config.isTouched} />)}
                <Button btnType="Success">Auth</Button>
            </form>
        );
        return(
            <div className={classes.Auth}>
                {authForm}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        onAuth: (email, password) => actions.auth()
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Auth);