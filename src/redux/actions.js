import * as types from './actionsTypes';

// ============================================================================================================
// ============================================================================================================

export const signin = ({ email, password }) => ({
    type: types.saga.signin,
    body: {
        email: email,
        password: password,
    },
});

// ============================================================================================================
// ============================================================================================================

export const loadOrg = () => ({
    type: types.saga.loadOrg,
});