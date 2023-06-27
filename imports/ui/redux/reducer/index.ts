import { combineReducers } from "redux";
import serviceReducer from "./service/reducer";

const rootReducer = combineReducers({ serviceReducer });

export default rootReducer;
