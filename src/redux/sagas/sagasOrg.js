import { call, put } from 'redux-saga/effects';
import * as types from '../actionsTypes';
import * as api from '../api';


export function* getEmpsList(action) {
    try {
        yield put({ type: types.FETCH_EMPS_START });
        const resp = yield call(api.getAllUsers);
        yield put({ type: types.FETCH_EMPS_SUCCEED, empsMap: resp });
    } catch (e) {
        yield put({ type: types.FETCH_EMPS_FAILED });
    }
}
