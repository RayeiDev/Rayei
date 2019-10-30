import {
    SIGNUP_REQUEST,
    SIGNUP_USER_STARTED,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_STARTED,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    LOOKUP_REQUEST,
    LOOKUP_STARTED,
    LOOKUP_SUCCESS,
    LOOKUP_FAILURE,
} from '../constants';
import { createAction } from '../util/reduxUtil'


export const userSignUp = (requestBody) =>
    createAction(SIGNUP_REQUEST, { requestBody });
export const signUpStarted = () =>
    createAction(SIGNUP_USER_STARTED);
export const signUpSuccess = (response) =>
    createAction(SIGNUP_USER_SUCCESS, { response });
export const signUpFailure = (response) =>
    createAction(SIGNUP_USER_FAILURE, { response });

export const userLogin = (requestBody) =>
    createAction(LOGIN_REQUEST, { requestBody });
export const loginStarted = () =>
    createAction(LOGIN_STARTED);
export const loginSuccess = (response) =>
    createAction(LOGIN_SUCCESS, { response });
export const loginFailure = () =>
    createAction(LOGIN_FAILURE);

export const forgotPassword = (requestBody) =>
    createAction(FORGOT_PASSWORD_REQUEST, { requestBody });
export const forgotPasswordStarted = () =>
    createAction(FORGOT_PASSWORD_STARTED);
export const forgotPasswordSuccess = (response) =>
    createAction(FORGOT_PASSWORD_SUCCESS, { response });
export const forgotPasswordFailure = () =>
    createAction(FORGOT_PASSWORD_FAILURE);

export const lookUpRequest = () =>
    createAction(LOOKUP_REQUEST);
export const lookUpStarted = () =>
    createAction(LOOKUP_STARTED);
export const lookUpSuccess = (response) =>
    createAction(LOOKUP_SUCCESS, { response });
export const lookUpFailure = (response) =>
    createAction(LOOKUP_FAILURE, { response });