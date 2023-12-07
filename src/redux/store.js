import {createStore,applyMiddleware} from "redux"
import rootReducer from "./reducer"
import thunkMiddleWare from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleWare)))

export default store