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
    LOOKUP_STARTED,
    LOOKUP_SUCCESS,
    LOOKUP_FAILURE,
    SURVEY_LIST_STARTED,
    SURVEY_LIST_SUCCESS,
    SURVEY_LIST_FAILURE,
    SURVEY_DETAIL_STARTED,
    SURVEY_DETAIL_SUCCESS,
    SURVEY_DETAIL_FAILURE,

} from '../constants';
import Immutable from 'seamless-immutable';
import { createReducer } from '../util/reduxUtil'


export const initialState = Immutable.from({
    loading: false,
    shouldGoBack: false,
    lookUpData: null,
    response: {
        message: ''
    },
    app: {
        userData: null,
    },
    survey: {
        surveyList: null,
        surveyDetail: null,
        loading: false,

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
            message: response.response.message
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
export const onForgotPasswordSuccess = (state, response) =>
    state.merge({
        loading: false,
        shouldGoBack: true,
        response: state.response.merge({
            message: response.response.message
        })
    });
export const onForgotPasswordFailure = (state) =>
    state.merge({
        loading: false
    });

export const onLookUpStarted = state =>
    state.merge({
        loading: true
    });
export const onLookUpSuccess = (state, response) =>
    state.merge({
        loading: false,
        lookUpData: response
    });
export const onLookUpFailure = (state) =>
    state.merge({
        loading: false,
    });

export const onSurveyListStarted = state =>
    state.merge({
        survey: state.survey.merge({
            loading: true,
            surveyList: initialState.survey.surveyList
        })
    });
export const onSurveyListSuccess = (state, response) =>
    state.merge({
        survey: state.survey.merge({
            loading: false,
            surveyList: response.response
        })
    });
export const onSurveyListFailure = (state) =>
    state.merge({
        survey: state.survey.merge({
            loading: false,
            surveyList: initialState.survey.surveyList
        })
    });

export const onSurveyDetailStarted = state =>
    state.merge({
        survey: state.survey.merge({
            loading: true,
            surveyDetail: initialState.survey.surveyDetail
        })
    });
export const onSurveyDetailSuccess = (state, response) =>
    state.merge({
        survey: state.survey.merge({
            loading: false,
            surveyDetail: response.response
        })
    });
export const onSurveyDetailFailure = (state) =>
    state.merge({
        survey: state.survey.merge({
            loading: false,
            surveyDetail: initialState.survey.surveyDetail
        })
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

    [LOOKUP_STARTED]: onLookUpStarted,
    [LOOKUP_SUCCESS]: onLookUpSuccess,
    [LOOKUP_FAILURE]: onLookUpFailure,

    [SURVEY_LIST_STARTED]: onSurveyListStarted,
    [SURVEY_LIST_SUCCESS]: onSurveyListSuccess,
    [SURVEY_LIST_FAILURE]: onSurveyListFailure,

    [SURVEY_DETAIL_STARTED]: onSurveyDetailStarted,
    [SURVEY_DETAIL_SUCCESS]: onSurveyDetailSuccess,
    [SURVEY_DETAIL_FAILURE]: onSurveyDetailFailure,

});


export default appReducer;