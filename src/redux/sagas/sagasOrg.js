import { call, put } from 'redux-saga/effects';
import * as types from '../actionsTypes';
import * as api from '../api';


export function* loadOrg(action) {
    try {
        yield put({ type: types.FETCH_ORG_START });
        const resp = yield call(api.getAllUsers);
        yield put({ type: types.FETCH_ORG_SUCCEED, empsMap: resp });
    } catch (e) {
        yield put({ type: types.FETCH_ORG_FAILED });
        yield put({ type: types.APP_SET_ERROR, error: e.message });
    }
}
