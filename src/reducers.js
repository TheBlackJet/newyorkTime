import { combineReducers } from 'redux';
import { reducers } from "./app/news/duck";

const rootReducer = combineReducers({
  news: reducers.newsReducer
});

export default rootReducer;