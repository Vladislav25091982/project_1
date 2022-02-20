import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({  
  basket: basketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) 