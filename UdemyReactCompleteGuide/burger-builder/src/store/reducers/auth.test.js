import reducer from './auth.js';
import * as actionTypes from '../actions/actionTypes';

describe("auth reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: "/"
        });
    });

    it("should store token upon login", () => {
        expect(reducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: "/"
        }, { type: actionTypes.AUTH_SUCCESS, token: "some-token", userId: "some-user-id" })).toEqual({
            token: "some-token",
            userId: "some-user-id",
            loading: false,
            error: null,
            authRedirectPath: "/"
        });
    });
});