//работаем с redux

import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

//создаем объекты для хранения методов reducer
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
});

//cоздаем наш store, передаем reducer
let store = createStore(reducers);
//глобально сохраняем объект store
window.store = store;

export default store;
