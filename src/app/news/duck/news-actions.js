import types from './news-types';
import { EMPTY_STRING_MESSAGE , NYT_URL} from "../../../app-configs";
import { searchArticleFromAPI, convertUTCTolocalTime } from "../../utils";

const searchText = (value, page) => {
    return (dispatch) => {
        searchArticleFromAPI(value, page)
        .then(data => {
            const returnedDataArray = data.response.docs.map((item) => {
                return ({
                    snippet: item.snippet,
                    source: item.source ? item.source : null,
                    pubDate: convertUTCTolocalTime(item.pub_date),
                    media: item.multimedia.length > 0 ? `${NYT_URL}/${item.multimedia[0].url}` : null
                })
            })
            dispatch({
                type: types.NYT_SEARCH_RESULT_RETRIEVED,
                data : returnedDataArray,
                searchString: value,
                currentPage: page
            })
        })
        .catch(error => {
            throw (error);
        })
    }
    
    
    
};

const toggleModalBox = (item = null) => {
    if(item){
        return({
            type: types.SHOW_MODAL_BOX,
            selected: item
        });
    }else{
        return({
            type: types.HIDE_MODAL_BOX
        });
    }
    
}

export default {
    searchText,
    toggleModalBox
}