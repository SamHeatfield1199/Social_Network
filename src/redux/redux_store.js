//работаем с redux

import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

import userReducer from "./usersReducer";

//создаем объекты для хранения методов reducer
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
});

//cоздаем наш store, передаем reducer
let store = createStore(reducers);
//глобально сохраняем объект store
window.store = store;

export default store;
