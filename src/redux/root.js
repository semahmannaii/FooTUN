import { combineReducers } from "redux";
import reducer from "./shopping/reducer"

const root = combineReducers({ shop: reducer })

export default root