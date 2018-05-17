import types from './news-types';
import { EMPTY_STRING_MESSAGE , NYT_URL} from "../../../app-configs";
import { searchArticleFromAPI, convertUTCTolocalTime } from "../../utils";

const searchText = (value) => {
    return (dispatch) => {
        searchArticleFromAPI(value)
        .then(data => {
            const returnedDataArray = data.response.docs.map((item) => {
                return ({
                    snippet: item.snippet,
                    source: item.source,
                    pubDate: convertUTCTolocalTime(item.pub_date),
                    media: item.multimedia.length > 0 ? `${NYT_URL}/${item.multimedia[0].url}` : "No media"
                })
            })
            dispatch({
                type: types.NYT_SEARCH_RESULT_RETRIEVED,
                data : returnedDataArray
            })
        })
        .catch(error => {
            throw (error);
        })
    }
    
    
    
};

export default {
    searchText,
}