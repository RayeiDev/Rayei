import {
    SIGNUP_USER_STARTED,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE

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

// const reducer = (state = {}, action) => {
//     switch (action.type) {
//         case SIGNUP_USER:
//             return { ...state, loading: true };
//         case NEWS_RECEIVED:
//             return { ...state, news: action.json[0], loading: false }
//         default:
//             return state;
//     }
// };

const appReducer = createReducer(initialState, {
    [SIGNUP_USER_STARTED]: onSignUpStarted,
    [SIGNUP_USER_SUCCESS]: onSignUpSuccess,
    [SIGNUP_USER_FAILURE]: onSignUpFailure,

});


export default appReducer;