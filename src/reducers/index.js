import {
    SIGNUP_USER_STARTED,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE

} from '../constants';
import Immutable from 'seamless-immutable';
import { createReducer } from '../util/reduxUtil'
import { combineReducers } from 'redux';


export const initialState = Immutable.from({
    loading: false,
    response: Immutable.from({
        message: ''
    }),
    app: {
        userData: null,
    }
});

export const onSignUpStarted = state =>
    state.merge({
        loading: true
    });
export const onSignUpSuccess = (state, response) =>
    state.merge({
        loading: false,
        response: state.response.merge({
            message: response.message
        })
    });
export const onSignUpFailure = (state) =>
    state.merge({
        loading: false,
        response: state.response.merge({
            message: initialState.response.message
        })
    });

export const onLoginStarted = state =>
    state.merge({
        loading: true
    });
export const onLoginSuccess = (state, response) =>
    state.merge({
        loading: false,
        app: state.app.merge({
            userData: response
        })
    });
export const onLoginFailure = (state) =>
    state.merge({
        loading: false
    });


const appReducer = createReducer(initialState, {
    [SIGNUP_USER_STARTED]: onSignUpStarted,
    [SIGNUP_USER_SUCCESS]: onSignUpSuccess,
    [SIGNUP_USER_FAILURE]: onSignUpFailure,
    [LOGIN_STARTED]: onLoginStarted,
    [LOGIN_SUCCESS]: onLoginSuccess,
    [LOGIN_FAILURE]: onLoginFailure,

});


export default appReducer;