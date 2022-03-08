import {
  SAVE_NEWS_DATA,
  SAVE_NEWS_LIST,
  CLEAR_NEWS_LIST,
  SAVE_NEWS_INDEX
} from "./types";

export const saveNews = (news) => {
  return {
    type: SAVE_NEWS_DATA,
    news,
  };
};

export const saveNewsList = (newslist) => {
  return {
    type: SAVE_NEWS_LIST,
    newslist,
  };
};

export const clearNewsList = () => {
  return {
    type: CLEAR_NEWS_LIST,
  };
};

export const saveIndex = (newsIndex) => {
  return {
    type: SAVE_NEWS_INDEX,
    newsIndex
  };
};




