import types from './news-types';
import { EMPTY_STRING_MESSAGE, NYT_URL, NO_RESULT } from "../../../app-configs";
import { searchArticleFromAPI, convertUTCTolocalTime } from "../../utils";

const searchText = (value, page) => {
    return (dispatch) => {
        if (!value.trim()) { // if there is no value, return empty
            dispatch({
                type: types.SHOW_ERROR_MESSAGE,
                message: EMPTY_STRING_MESSAGE
            })
        } else {
            // search for article
            searchArticleFromAPI(value, page)
                .then(data => {
                    if (data.response.docs.length > 0){
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
                    }else{
                        // return no result error
                        dispatch({
                            type: types.SHOW_ERROR_MESSAGE,
                            message: NO_RESULT
                        })
                    }
                   
                })
                .catch(error => {
                    throw (error);
                })
        }

    }



};

const toggleModalBox = (item = null) => {
    if (item) {
        return ({
            type: types.SHOW_MODAL_BOX,
            selected: item
        });
    } else {
        return ({
            type: types.HIDE_MODAL_BOX
        });
    }

}

export default {
    searchText,
    toggleModalBox
}