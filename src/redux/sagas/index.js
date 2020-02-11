import { takeLatest, all } from 'redux-saga/effects';
import * as sagasApp from './sagasApp';
import * as types from '../actionsTypes';


function* actionWatcher() {
    yield takeLatest(types.saga.signin, sagasApp.signin);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
