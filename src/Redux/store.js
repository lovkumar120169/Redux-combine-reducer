import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./CounterReducer/reducer";
import { TodoReducer } from "./TodoReducer/reducer";


const rootReducer=combineReducers({CounterReducer,TodoReducer})

export const store=legacy_createStore(rootReducer)