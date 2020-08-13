import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};


export const authSuccess = (authData) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        errorMessage: error
    };
};

export const auth = (email, password) =>{
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcYvd8BG6OFq48SG8yw317_2c0zfXs1_A", authData).then(response =>{
            console.log(response);
            dispatch(authSuccess(response.data));
        }).catch(error => {
        console.log(error);
            dispatch(authFail(error))
        });
    };
};