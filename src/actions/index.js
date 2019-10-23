import {
    SIGNUP_REQUEST,
    SIGNUP_USER_STARTED,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../constants';
import { createAction } from '../util/reduxUtil'


export const userSignUp = (requestBody) =>
    createAction(SIGNUP_REQUEST,{requestBody});
export const signUpStarted = () =>
    createAction(SIGNUP_USER_STARTED);
export const signUpSuccess = (response) =>
    createAction(SIGNUP_USER_SUCCESS,{response});
export const signUpFailure = (response) =>
    createAction(SIGNUP_USER_FAILURE,{response});

export const userLogin = (requestBody) =>
    createAction(LOGIN_REQUEST,{requestBody});
export const loginStarted = () =>
    createAction(LOGIN_STARTED);
export const loginSuccess = (response) =>
    createAction(LOGIN_SUCCESS,{response});
export const loginFailure = (response) =>
    createAction(LOGIN_FAILURE,{response});

