//работаем с redux
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
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
  app: appReducer,
});


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));




//cоздаем наш store, передаем reducer
//applyMiddleware для промежуточныйх слоев(у нас это thunk)

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//глобально сохраняем объект store
//window.store = store;

export default store;
