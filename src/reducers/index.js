import {
    SIGNUP_USER_STARTED,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FORGOT_PASSWORD_STARTED,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,

} from '../constants';
import Immutable from 'seamless-immutable';
import { createReducer } from '../util/reduxUtil'


export const initialState = Immutable.from({
    loading: false,
    shouldGoBack: false,
    response: {
        message: ''
    },
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
        shouldGoBack: true,
        response: state.response.merge({
            message:response.response.message        
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
        loading: true,
        app: state.app.merge({
            userData: initialState.userData
        })
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
        loading: false,
        app: state.app.merge({
            userData: initialState.userData            
        })
    });

export const onForgotPasswordStarted = (state) =>
    state.merge({
        loading: true
    });
export const onForgotPasswordSuccess = (state,response) =>
    state.merge({
        loading: false,
        shouldGoBack: true,
        response: state.response.merge({
            message:response.response.message
        })
    });
export const onForgotPasswordFailure = (state) =>
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
    
    [FORGOT_PASSWORD_STARTED]: onForgotPasswordStarted,
    [FORGOT_PASSWORD_SUCCESS]: onForgotPasswordSuccess,
    [FORGOT_PASSWORD_FAILURE]: onForgotPasswordFailure,

});


export default appReducer;