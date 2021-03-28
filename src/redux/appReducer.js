import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSucces = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => (dispatch) => {
  //когда получим данные из auth проинициализируемся
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then(() =>{
    dispatch(initializedSucces())
  })
  
};
export default appReducer;
