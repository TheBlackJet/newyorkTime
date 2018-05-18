import { NYT_API_KEY , NYT_ARTICLE_SEARCH_URL, EMPTY_STRING_MESSAGE } from '../../app-configs';

export const searchArticleFromAPI = async (query, page = 1) => {
    if (!query) return EMPTY_STRING_MESSAGE;
    const response = await fetch(`${NYT_ARTICLE_SEARCH_URL}?api-key=${NYT_API_KEY}&q=${query}&page=${page}`);
    const json = await response.json();
    return json;
} 


export const convertUTCTolocalTime = (utcDate) => {
    return new Date(utcDate).toDateString();
}
