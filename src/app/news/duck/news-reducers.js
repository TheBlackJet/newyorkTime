import types from './news-types';

const INITIAL_STATE = {
    list: [],
    searchString: "",
    isModalBoxVisible: false,
    currentPage: 1,
    selected: {},
    message: ''
}
const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.NYT_SEARCH_RESULT_RETRIEVED:
        return {
            ...state,
            list: action.data,
            message: '',
            searchString: action.searchString,
            currentPage: action.currentPage
        }
        case types.SHOW_MODAL_BOX:
        return {
            ...state,
            isModalBoxVisible: true,
            selected: action.selected
        }
        case types.HIDE_MODAL_BOX:
        return {
            ...state,
            isModalBoxVisible: false,
            selected: {}
        }
        case types.SHOW_ERROR_MESSAGE:
        return {
            ...state,
            list: [],
            selected: {},
            message: action.message
        }
        default: return state;
    }
}

export default {
    newsReducer,
}