import { call, put } from 'redux-saga/effects';
import * as types from '../actionsTypes';
import * as api from '../api';


export function* signin(action) {
    try {
        yield put({ type: types.APP_SIGNIN_STARTED });
        const resp = yield call(api.signin, action.body);
        yield put({ type: types.APP_SIGNIN_SUCCEED, result: resp });
    } catch (e) {
        yield put({ type: types.APP_SIGNIN_FAILED, message: e.message });
    }
}
