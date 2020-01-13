import * as types from '../actionsTypes';

const appReducer = (  state = {
                          username: null,
                          isSigningIn: false,
                          error: null,
                          currentPage: null,

                          isLoadingSecrets: false,
                          secrests: null,
                      },
                      action) => {

    switch (action.type) {

        // ====================================================================================================
        // ====================================================================================================

        case types.APP_SET_ERROR:
            return {
                ...state,
                error: action.error,
            };

        case types.APP_SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };

        // ====================================================================================================
        // ====================================================================================================

        case types.APP_LOAD_SECRETS_STARTED:
            return {
                ...state,
                secrests: null,
            };
        case types.APP_LOAD_SECRETS_SUCCEED:
            return {
                ...state,
                secrests: action.secrets,
            };
        case types.APP_LOAD_SECRETS_FAILED:
            return {
                ...state,
                error: action.message,
            };

        // ====================================================================================================
        // ====================================================================================================

        case types.APP_SIGNIN_STARTED:
            return {
                ...state,
                username: null,
                isSigningIn: true,
                error: null,
            };
        case types.APP_SIGNIN_SUCCEED:
            return {
                ...state,
                isSigningIn: false,
                // username: action.loginResult.username,
            };
        case types.APP_SIGNIN_FAILED:
            return {
                ...state,
                isSigningIn: false,
                error: action.message,
            };


        case types.APP_SIGNOUT_STARTED:
            return {
                ...state,
                secrests: null,
                error: null,
            };
        case types.APP_SIGNOUT_SUCCEED:
            return {
                ...state,
                username: null,
            };
        case types.APP_SIGNOUT_FAILED:
            return {
                ...state,
                error: action.message,
            };

        // ====================================================================================================
        // ====================================================================================================

        default:
            return state;
    }
};
export default appReducer;
