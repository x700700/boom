import { call, put } from 'redux-saga/effects';
import * as types from '../actionsTypes';
import * as api from '../api';

export function* loadSecrets(action) {
    try {
        yield put({ type: types.APP_LOAD_SECRETS_STARTED });
        const resp = yield call(api.getSecrets);
        yield put({ type: types.APP_LOAD_SECRETS_SUCCEED, secrets: resp });
    } catch (e) {
        yield put({ type: types.APP_LOAD_SECRETS_FAILED, message: e.message });
    }
}

export function* signin(action) {
    try {
        yield put({ type: types.APP_SIGNIN_STARTED });
        // const resp = yield call(api.signin, { body: action.body });
        yield put({ type: types.APP_SIGNIN_SUCCEED });
    } catch (e) {
        yield put({ type: types.APP_SIGNIN_FAILED, message: e.message });
    }
}

export function* signout(action) {
    try {
        yield put({ type: types.APP_SIGNOUT_STARTED });
        // yield call(api.signout);
        yield put({ type: types.APP_SIGNOUT_SUCCEED });
        yield call(cleanLists);
    } catch (e) {
        yield put({ type: types.APP_SIGNOUT_FAILED, message: e.message });
    }
}

export function* cleanLists(action) {
    yield put({ type: types.FETCH_EMPS_RESET });
}
