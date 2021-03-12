import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserDataTC } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccesActionCreator = () => {
  return {
    type: SET_INITIALIZED,
  };
};

export const initializeAppTC = () => (dispatch) => {
  //когда получим данные из auth проинициализируемся
  let promise = dispatch(getAuthUserDataTC())
  Promise.all([promise])
  .then(() =>{
    dispatch(initializedSuccesActionCreator())
  })
  
};
export default appReducer;
