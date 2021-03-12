//работаем с redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
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
  form: formReducer,
});

//cоздаем наш store, передаем reducer
//applyMiddleware для промежуточныйх слоев(у нас это thunk)
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//глобально сохраняем объект store
window.store = store;

export default store;
