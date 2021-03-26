import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const DELETE_POST = "DELETE_POST";



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
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};


export const getStatus = (userid) => async (dispatch) => {
  let data = await profileAPI.getStatus(userid);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const getUserProfile = (userid) => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userid);
  dispatch(setUserProfile(data));
};
export const savePhoto = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userid = getState().auth.userid 
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userid));
  }else{
    dispatch(stopSubmit("edit-profile", { _error: data.messages[0]}))
  }
};

export default profileReducer;
