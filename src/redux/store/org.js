import * as types from '../actionsTypes';

const orgReducer = (  state = {
                                isFetching: false,
                                users: null,
                                vps: null,
                            },
                      action) => {

    switch (action.type) {

        case types.RESET_ORG:
            return {
                ...state,
                isFetching: false,
                users: null,
                vps: null,
            };


        case types.FETCH_ORG_START:
            return {
                ...state,
                isFetching: true,
                users: null,
                vps: null,
            };

        case types.FETCH_ORG_SUCCEED:
            return {
                ...state,
                isFetching: false,
                users: action.users,
            };

        case types.FETCH_ORG_FAILED:
            return {
                ...state,
                isFetching: false,
            };

        default:
            return state;
    }
};
export default orgReducer;
