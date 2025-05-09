import React, { Component } from 'react';
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom'
import { updateObject, checkValidity } from '../../shared/utility';

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
                        isRequired: true,
                        isEmail: true
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
                        isRequired: true,
                        minLength: 6,
                    },
                    isValid: false,
                    isTouched: false
            }
        },
        isSignUp: true    
    }

    componentDidMount(){
        if(!this.props.isBuildingBurger && this.props.authRedirectPath !== "/"){
            this.props.onSetAuthRedirectPath();
        }
    }

    changedValueHandler = (event, formElementId) => {
        const updatedControls = updateObject(this.state.controls, {
            [formElementId]: updateObject(this.state.controls[formElementId], {
                value: event.target.value,
                isValid: checkValidity(event.target.value, this.state.controls[formElementId].validationRules),
                isTouched: true
            })
         });

        this.setState({ controls: updatedControls });
    }

    submitAuthHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    };

    switchAuthMode = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp};
        });
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
                <Button clicked={this.switchAuthMode} btnType="Danger">Switch to {(this.state.isSignUp) ? "SignIn" : "SignUp"}</Button>
            </form>
        );

        if(this.props.loading){
            authForm = <Spinner />;
        }

        let errorMessage = null;
        if(this.props.error) {
            errorMessage = this.props.error.message
        }

        let authRedirect = null;
        if(this.props.isAuth){
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return(
            <div className={classes.Auth}>
                <h1>{(this.state.isSignUp) ? "SignUp" : "SignIn"}</h1>
                {authRedirect}
                {errorMessage}
                {authForm}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        isBuildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);