import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import root from "./root"

const store = createStore(root, composeWithDevTools())

export default store