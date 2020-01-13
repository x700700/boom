// import * as types from '../actionsTypes';
// import consts from "../../common/consts";

const artistsReducer = (  state = {
                                isFetching: false,
                                isLoaded: false,
                                org: null,
                            },
                      action) => {

    switch (action.type) {

        /*
        case types.ARTISTS_LIST_RESET:
            return {
                ...state,
                isLoaded: false,
                artistsMap: null,
                hasMore: false,
                lastNewArtistId: null,
            };

         */

            /*

        case types.FETCH_ARTISTS_START:
            return {
                ...state,
                isFetching: true,
                isLoaded: action.add,
                artistsMap: !action.add ? null : state.artistsMap,
            };

        case types.FETCH_ARTISTS_SUCCEED:
            const updated = !action.add ? action.artistsMap : Object.assign(state.artistsMap, action.artistsMap);
            const hasMore = Object.keys(action.artistsMap).length >= consts.ui.pageSize;
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                artistsMap: updated,
                hasMore: hasMore,
            };

        case types.FETCH_ARTISTS_FAILED:
            return {
                ...state,
                isFetching: false,
                artistsMap: !action.add ? null : state.artistsMap,
                isLoaded: !action.add,
                hasMore: action.add,
            };

             */

        default:
            return state;
    }
};
export default artistsReducer;
