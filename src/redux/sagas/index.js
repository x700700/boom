import { takeLatest, all } from 'redux-saga/effects';
import * as sagasApp from './sagasApp';
import * as sagasOrg from './sagasOrg';
import * as types from '../actionsTypes';


function* actionWatcher() {
    yield takeLatest(types.saga.signin, sagasApp.signin);
    yield takeLatest(types.saga.signout, sagasApp.signout);

    yield takeLatest(types.saga.getEmpsList, sagasOrg.getEmpsList);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
