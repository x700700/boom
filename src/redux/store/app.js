import * as types from '../actionsTypes';

const appReducer = (  state = {
                          username: null,
                      },
                      action) => {

    switch (action.type) {

        // ====================================================================================================
        // ====================================================================================================

        case types.APP_SIGNIN_STARTED:
            return {
                ...state,
                username: null,
            };
        case types.APP_SIGNIN_SUCCEED:
            return {
                ...state,
                username: action.result.username,
            };
        case types.APP_SIGNIN_FAILED:
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
