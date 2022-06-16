import { combineReducers } from "redux";
import { fetchTheData, searchTheData,loginTheUser,showMovieInfo } from "./index";

export const rootReducer=combineReducers({
    fetchTheData,
    searchTheData,
    loginTheUser,
    showMovieInfo
})