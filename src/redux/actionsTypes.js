
export const APP_LOAD_SECRETS_STARTED = 'app.APP_LOAD_SECRETS_STARTED';
export const APP_LOAD_SECRETS_SUCCEED = 'app.APP_LOAD_SECRETS_SUCCEED';
export const APP_LOAD_SECRETS_FAILED = 'app.APP_LOAD_SECRETS_FAILED';

// ============================================================================================================
// ============================================================================================================

export const APP_SIGNIN_STARTED = 'app.APP_SIGNIN_STARTED';
export const APP_SIGNIN_SUCCEED = 'app.APP_SIGNIN_SUCCEED';
export const APP_SIGNIN_FAILED = 'app.APP_SIGNIN_FAILED';

export const APP_SIGNOUT_STARTED = 'app.APP_SIGNOUT_STARTED';
export const APP_SIGNOUT_SUCCEED = 'app.APP_SIGNOUT_SUCCEED';
export const APP_SIGNOUT_FAILED = 'app.APP_SIGNOUT_FAILED';

// ============================================================================================================
// ============================================================================================================

export const FETCH_EMPS_RESET = 'emps.FETCH_EMPS_RESET';

export const FETCH_EMPS_START = 'emps.FETCH_EMPS_START';
export const FETCH_EMPS_SUCCEED = 'emps.FETCH_EMPS_SUCCEED';
export const FETCH_EMPS_FAILED = 'emps.FETCH_EMPS_FAILED';

// ============================================================================================================
// ============================================================================================================

export const saga = {
    signin: 'signin',
    signout: 'signout',

    getEmpsList: 'getEmpsList',
    updateEmp: 'updateEmp',
};
