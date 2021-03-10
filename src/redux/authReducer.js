import { authMe } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUserActionCreator = (id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login },
  };
};

export const getAuthUserDataTC = () => {
  return (dispatch) => {
    authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserActionCreator(id, email, login));
      }
    });
  };
};

export default authReducer;