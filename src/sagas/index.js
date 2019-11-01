import { put, takeLatest, all } from 'redux-saga/effects';
import {
    SIGNUP_REQUEST,
    LOGIN_REQUEST,
    FORGOT_PASSWORD_REQUEST,
    LOOKUP_REQUEST,
    SURVEY_LIST_REQUEST,
    SURVEY_DETAIL_REQUEST
} from '../constants';
import UserModel from '../models/UserModel'
import RestModel from '../models/RestModel'
import SurveyModel from '../models/SurveyModel'
import { showMessage } from '../common/components/BaseComponent'

import {
    signUpStarted,
    signUpSuccess,
    signUpFailure,
    loginStarted,
    loginSuccess,
    loginFailure,
    forgotPasswordStarted,
    forgotPasswordSuccess,
    forgotPasswordFailure,
    lookUpStarted,
    lookUpSuccess,
    lookUpFailure,
    surveyListStarted,
    surveyListSuccess,
    surveyListFailure,
    surveyDetailStarted,
    surveyDetailSuccess,
    surveyDetailFailure,
    
} from '../actions';



export function* signUpRequest(action) {
    try {
        yield put(signUpStarted());
        const responseObj = yield UserModel.signUp(action.requestBody);

        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(signUpSuccess(responseObj.data))
            // if (responseObj.data && (responseObj.data.message)) {
            //     showMessage(true, responseObj.data.message)
            // }
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(signUpFailure())
        }
    } catch (error) {
        yield put(signUpFailure());
        showMessage(true, error)
    }
}

export function* loginRequest(action) {
    try {
        yield put(loginStarted());
        const responseObj = yield UserModel.login(action.requestBody);

        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(loginSuccess(responseObj.data))
            // if (responseObj.data && (responseObj.data.message)) {
            //     showMessage(true, responseObj.data.message)
            // }
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(loginFailure())
        }
    } catch (error) {
        yield put(loginFailure());
        showMessage(true, error)

    }
}
export function* forgotPasswordRequest(action) {
    try {
        yield put(forgotPasswordStarted());
        const responseObj = yield UserModel.forgotPassword(action.requestBody);

        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(forgotPasswordSuccess(responseObj.data))
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(forgotPasswordFailure())
        }
    } catch (error) {
        yield put(forgotPasswordFailure());
        showMessage(true, error)

    }
}

export function* onLookUpRequest(action) {
    try {
        yield put(lookUpStarted());
        const responseObj = yield RestModel.lookUp();
        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(lookUpSuccess(responseObj.data))
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(lookUpFailure())
        }
    } catch (error) {
        yield put(lookUpFailure());
        showMessage(true, error)
    }
}

export function* onSurveyListRequest(action) {    
    try {
        yield put(surveyListStarted());
        const responseObj = yield SurveyModel.getSurvey(action.requestUrl);
        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(surveyListSuccess(responseObj.data))
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(surveyListFailure())
        }
    } catch (error) {
        yield put(surveyListFailure());
        showMessage(true, error)
    }
}

export function* onSurveyDetailRequest(action) {
    try {
        yield put(surveyDetailStarted());
        const responseObj = yield SurveyModel.getSurvey(action.requestUrl);
        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(surveyDetailSuccess(responseObj.data))
        } else {
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            } else {
                showMessage(true, strings('somethingWentWrong'))
            }
            yield put(surveyDetailFailure())
        }
    } catch (error) {
        yield put(surveyDetailFailure());
        showMessage(true, error)
    }
}

export function* actionWatcher() {
    yield takeLatest(SIGNUP_REQUEST, signUpRequest)
    yield takeLatest(LOGIN_REQUEST, loginRequest)
    yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordRequest)
    yield takeLatest(LOOKUP_REQUEST, onLookUpRequest)
    yield takeLatest(SURVEY_LIST_REQUEST, onSurveyListRequest)
    yield takeLatest(SURVEY_DETAIL_REQUEST, onSurveyDetailRequest)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
