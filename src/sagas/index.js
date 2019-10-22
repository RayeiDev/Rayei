import { put, takeLatest, all } from 'redux-saga/effects';
import { SIGNUP_REQUEST } from '../constants';
import UserModel from '../models/UserModel'
import { showMessage } from '../common/components/BaseComponent'

import {
    signUpStarted,
    signUpSuccess,
    signUpFailure,
} from '../actions';



export function* signUpRequest(action) {
    try {
        yield put(signUpStarted());
        const responseObj = yield UserModel.signUp(action.requestBody);

        if (responseObj.statusCode === 200 || responseObj.statusCode === 201) {
            yield put(signUpSuccess(responseObj.data))
            if (responseObj.data && (responseObj.data.message)) {
                showMessage(true, responseObj.data.message)
            }
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
export function* actionWatcher() {
    yield takeLatest(SIGNUP_REQUEST, signUpRequest)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
