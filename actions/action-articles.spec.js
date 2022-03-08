import * as actions from "./news";
import * as types from "./types";
import thunk from "redux-thunk";

describe("test all action in", () => {
  it("should create an action to add a todo", () => {
    const expectedActionSaveReq = {
      type: types.SAVE_NEWS_DATA,
      news:[]
    };
    const expectedActionNewsList = {
      type: types.SAVE_NEWS_LIST,
      newslist: [],
    };
    const expectedActionClearNewsList = {
      type: types.CLEAR_NEWS_LIST
    };

    const expectedActionSaveNewsIndex = {
      type: types.SAVE_NEWS_INDEX,
      newsIndex:123
    };

    expect(actions.saveNews([])).toEqual(expectedActionSaveReq);
    expect(actions.saveNewsList([])).toEqual(expectedActionNewsList);
    expect(actions.clearNewsList()).toEqual(expectedActionClearNewsList);
    expect(actions.saveIndex(123)).toEqual(expectedActionSaveNewsIndex);
  });
});

