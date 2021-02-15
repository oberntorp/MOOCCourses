import * as actionTypes from './actionTypes';

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

export const logoutSucced = () =>{
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (email, password, isSignUp) =>{
    return{
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignUp: isSignUp
    };
};

export const checkAuth = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
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

