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

const saveSessionData = (response) => {
    localStorage.setItem("token", response.data.idToken);
    localStorage.setItem("expirationDate", calculateExpirationDate(response));
    localStorage.setItem("userId", response.data.localId);
    return expiresInMiliSeconds;
};
const calculateExpirationDate = (response) => {
    return new Date(new Date().getTime() + expiresInMiliSeconds(response));
};

const expiresInMiliSeconds = (response) => response.data.expiresIn * 1000;

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
            saveSessionData(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuth(expiresInMiliSeconds(response)));
        }).catch(error => {
            dispatch(authFail(error));
        });
    };
};

const checkAuth = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
};

export const logout = () => {
    clearSession();
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const setAuthRedirectPath = (pathToRedirectTo) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        pathToRedirectTo: pathToRedirectTo
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if(!token){
            dispatch(logout());
        }
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if(expirationDate > new Date()){
            dispatch(authSuccess(token, localStorage.getItem("userId")));
            dispatch(checkAuth(expirationDate.getTime() - new Date().getTime()));
        } else {
            dispatch(logout());
        }
    };
};

