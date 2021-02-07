//работаем с redux

import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./dialogsReducer";
import userReducer from "./usersReducer";

//создаем объекты для хранения методов reducer
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: userReducer
});

//cоздаем наш store, передаем reducer
let store = createStore(reducers);
//глобально сохраняем объект store
window.store = store;

export default store;
