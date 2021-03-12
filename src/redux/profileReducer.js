import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: "1" },
    { id: 2, message: "HIt`s my first post", likesCount: "23" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setUserStatusAC = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const setUserStatusTC = (userid) => {
  return (dispatch) => {
    profileAPI.getStatus(userid).then((data) => {
      dispatch(setUserStatusAC(data));
    });
  };
};
export const updateUserStatusTC = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
      }
    });
  };
};
export const getUserProfileTC = (userid) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userid).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export default profileReducer;
