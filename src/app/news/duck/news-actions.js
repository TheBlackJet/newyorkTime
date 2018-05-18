import types from './news-types';
import { EMPTY_STRING_MESSAGE, NYT_URL, NO_RESULT } from "../../../app-configs";
import { searchArticleFromAPI, convertUTCTolocalTime } from "../../utils";

const searchText = (value, page) => {

    return (dispatch) => {
        dispatch({
            type: types.SHOW_LOADER
        }); // show loading animation
        if (!value.trim()) { 
            // hide loader
            dispatch({
                type: types.HIDE_LOADER
            })
            // if there is no value, return empty
            dispatch({
                type: types.SHOW_ERROR_MESSAGE,
                message: EMPTY_STRING_MESSAGE
            })
        } else {
            // search for article
            searchArticleFromAPI(value, page)
                .then(data => {
                    if (data.response.docs.length > 0) {
                        const returnedDataArray = data.response.docs.map((item) => {
                            return ({
                                snippet: item.snippet,
                                source: item.source ? item.source : null,
                                pubDate: convertUTCTolocalTime(item.pub_date),
                                media: item.multimedia.length > 0 ? `${NYT_URL}/${item.multimedia[0].url}` : null
                            })
                        })
                        // search result returned
                        dispatch({
                            type: types.NYT_SEARCH_RESULT_RETRIEVED,
                            data: returnedDataArray,
                            searchString: value,
                            currentPage: page
                        })
                    } else {
                        // return no result error
                        dispatch({
                            type: types.SHOW_ERROR_MESSAGE,
                            message: NO_RESULT
                        })
                    }
                    // hide loader
                    dispatch({
                        type: types.HIDE_LOADER
                    })
                })
                .catch(error => {
                    throw (error);
                })
        }
    }
};

const toggleModalBox = (item = null) => {
    if (item) {
        return showModalBox(item);
    } else {
        return hideModalBox();
    }

}


const showModalBox = (item) => {
    return (dispatch) => {
        dispatch({
            type: types.SHOW_MODAL_BOX,
            selected: item
        });
    }
}

const hideModalBox = () => {
    return (dispatch) => {
        dispatch({
            type: types.HIDE_MODAL_BOX
        });
    }
}

export default {
    searchText,
    toggleModalBox
}