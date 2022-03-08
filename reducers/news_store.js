import {
  SAVE_NEWS_DATA,
  SAVE_NEWS_LIST,
  CLEAR_NEWS_LIST,
  SAVE_NEWS_INDEX
} from "../actions/types";

const defaultState = {
  response: null,
  newsList: null,
  isLoading: false,
  error: "",
};
const news = (state = JSON.parse(JSON.stringify(defaultState)), action) => {
  console.log("action:",action)
  switch (action.type) {
    case SAVE_NEWS_DATA:
      return {
        ...state,
        response: action.news
      };
    case SAVE_NEWS_LIST:
      return {
        ...state,
        newsList: action.newslist
      };
    case CLEAR_NEWS_LIST:
      return {
        ...state,
        newsList: null
    };
    case SAVE_NEWS_INDEX:
      return {
        ...state,
        newsIndex: action.newsIndex || 0
      };
    default:
      return state;
  }
};
export default news;
