import types from './news-types';

const INITIAL_STATE = {
    list: [],
    selected: 0,
    message: ''
}
const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NYT_SEARCH_RESULT_RETRIEVED:
        return {
            ...state,
            list: action.data,
            message: ''
        }
        default: return state;
    }
}

export default {
    newsReducer,
}