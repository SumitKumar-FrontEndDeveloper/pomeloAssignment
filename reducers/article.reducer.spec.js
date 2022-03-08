import news from "./news_store";
import * as types from "../actions/types";

describe("testing default reducer", () => {
  it("should return the initial state", () => {
    expect(news(undefined, {})).toEqual({
      response: null,
      newsList: null,
      isLoading: false,
      error: "",
    });
  });

  it("should handle SAVE_NEWS_DATA", () => {
    let action = {
      type: types.SAVE_NEWS_DATA,
      news : {}
    };
    const expected = {
      response : action.news
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle SAVE_NEWS_LIST", () => {
    let action = {
      type: types.SAVE_NEWS_LIST,
      newslist: [],
    };
    const expected = {
      newsList: action.newslist
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle CLEAR_NEWS_LIST", () => {
    let action = {
      type: types.CLEAR_NEWS_LIST,
    };
    const expected = {
      newsList: null
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle SAVE_NEWS_INDEX", () => {
    let action = {
      type: types.SAVE_NEWS_INDEX,
      newsIndex:234
    };
    const expected = {
      newsIndex: action.newsIndex
    };
    expect(news({}, action)).toEqual(expected);
  });
 });
