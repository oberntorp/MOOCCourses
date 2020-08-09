import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-config-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: "input",
                    elementConfiguration: {
                        type: "text",
                        placeholder: "Your Name"
                    },
                    value: "",
                    validationRules: {
                        isRequired: true
                    },
                    isValid: false,
                    touched: false
            },
            street: {
                elementType: "input",
                    elementConfiguration: {
                        type: "text",
                        placeholder: "Your Street"
                    },
                    value: "",
                    validationRules: {
                        isRequired: true
                    },
                    isValid: false,
                    touched: false

                },
            zipCode: {
                elementType: "input",
                    elementConfiguration: {
                        type: "text",
                        placeholder: "Your Zip Code"
                    },
                    value: "",
                    validationRules: {
                        isRequired: true,
                        isNumber: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    isValid: false,
                    touched: false
                },
                country: {
                    elementType: "input",
                        elementConfiguration: {
                            type: "text",
                            placeholder: "Your Country"
                        },
                        value: "",
                        validationRules: {
                            isRequired: true
                        },
                        isValid: false,
                        touched: false
                    },
                deliveryMethod: {
                    elementType: "select",
                    elementConfiguration: {
                        options: [
                            {displayName: "Fastest", value: "fastest"},
                            {displayName: "Cheapest", value: "cheapest"}
                        ],
                    },
                    value: "fastest"
                },
            },
            isFormValid: false,
            loading: false
    }

    submitOrderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true})
        const formData = {};
        for(let formElementId in this.state.orderForm){
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }

        const orderData = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                orderData: formData
        };

        axios.post("/orders.json", orderData).then(response => {
            this.setState({loading: false});
            this.props.history.replace("/");
        }).catch(error => this.setState({loading: false}));
    }

    changedValueHandler = (event, formElementId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[formElementId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value.trim(), updatedFormElement.validationRules);
        updatedFormElement.touched = true;
        updatedOrderForm[formElementId] = updatedFormElement;

        let isFormValid = true;
        for(let formElementIdentifier in updatedOrderForm){
            if(updatedOrderForm[formElementIdentifier].validationRules){
                isFormValid = updatedOrderForm[formElementIdentifier].isValid && isFormValid;
            }
        }

        this.setState({orderForm: updatedOrderForm, isFormValid: isFormValid});
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

    render(){
        const formElements = [];
        for(let key in this.state.orderForm){
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let contactForm = (
            <form onSubmit={this.submitOrderHandler}>
                {formElements.map(formElement => <Input key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfiguration={formElement.config.elementConfiguration}
                value={formElement.config.value}
                changed={(event) => this.changedValueHandler(event, formElement.id)}
                isInvalid={!formElement.config.isValid}
                shouldValidate={formElement.config.validationRules}
                touched={formElement.config.touched} />)}
                <Button btnType="Success" disabled={!this.state.isFormValid}>Order</Button>
            </form>
        );

        if(this.state.loading){
            contactForm = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Please enter your contact information</h4>
                {contactForm}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
}

export default connect(mapStateToProps)(ContactData);