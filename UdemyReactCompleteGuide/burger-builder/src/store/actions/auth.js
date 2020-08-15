import * as actionTypes from './actionTypes';
import axios from 'axios';

const FIREBASE_API_KEY = "AIzaSyBcYvd8BG6OFq48SG8yw317_2c0zfXs1_A";

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};


export const authSuccess = (token, userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignUp) =>{
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = (isSignUp) ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

        axios.post(url, authData).then(response =>{
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuth(response.data.expiresIn));
        }).catch(error => {
            dispatch(authFail(error));
        });
    };
};

const checkAuth = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};