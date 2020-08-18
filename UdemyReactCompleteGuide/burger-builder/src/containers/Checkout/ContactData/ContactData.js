import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-config-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input/Input';
import { connect } from 'react-redux';
import * as orderAction from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

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
                    isTouched: false
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
                    isTouched: false

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
                    isTouched: false
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
                        isTouched: false
                },
                email: {
                    elementType: 'input',
                    elementConfiguration: {
                        type: 'email',
                        placeholder: 'Your Email'
                    },
                    value: '',
                    validationRules: {
                        required: true,
                        isEmail: true
                    },
                    isValid: false,
                    isTouched: false
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
            isFormValid: false
    }

    submitOrderHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for(let formElementId in this.state.orderForm){
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }

        const orderData = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                orderData: formData,
                userId: this.props.userId
        };

        this.props.onOrderSubmit(orderData, this.props.token);
    }

    changedValueHandler = (event, formElementId) => {

        const updatedFormElement = updateObject(this.state.orderForm[formElementId], {
            value: event.target.value,
            isValid: checkValidity(event.target.value.trim(), this.state.orderForm[formElementId].validationRules),
            isTouched: true
        });

        const updatedOrderForm = updateObject(this.state.orderForm, { [formElementId]: updatedFormElement });

        let isFormValid = true;
        for(let formElementIdentifier in updatedOrderForm){
            if(updatedOrderForm[formElementIdentifier].validationRules){
                isFormValid = updatedOrderForm[formElementIdentifier].isValid && isFormValid;
            }
        }

        this.setState({orderForm: updatedOrderForm, isFormValid: isFormValid});
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
                isTouched={formElement.config.isTouched} />)}
                <Button btnType="Success" disabled={!this.state.isFormValid}>Order</Button>
            </form>
        );

        if(this.props.loading){
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
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return{
       onOrderSubmit: (orderData, token) => dispatch(orderAction.purchaseBurger(orderData, token)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));