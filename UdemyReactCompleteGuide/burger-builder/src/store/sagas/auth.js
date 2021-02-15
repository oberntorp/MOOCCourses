import delay from 'redux-saga';
import {
    put
} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

const FIREBASE_API_KEY = "AIzaSyBcYvd8BG6OFq48SG8yw317_2c0zfXs1_A";
export function* logoutSaga(action) {
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("expirationDate");
    yield localStorage.removeItem("userId");
    yield put(actions.logoutSucced());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

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

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = (action.isSignUp) ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}` : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

    try {
        const response = yield axios.post(url, authData)
        yield saveSessionData(response);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuth(expiresInMiliSeconds(response)));
    } catch (error) {
        yield put(actions.authFail(error));
    }
}