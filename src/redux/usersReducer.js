import { followUser, getUsers, userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALUSERSCOUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        //users: {...state.users}
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        //users: {...state.users}
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SETUSERS:
      return {
        ...state,
        users: action.users,
      };

    case SETCURRENTPAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SETTOTALUSERSCOUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersActionCreator = (users) => {
  return {
    type: SETUSERS,
    users,
  };
};

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SETCURRENTPAGE,
    currentPage,
  };
};
export const setTotalUsersCountActionCreator = (totalUsersCount) => {
  return {
    type: SETTOTALUSERSCOUNT,
    count: totalUsersCount,
  };
};
export const toggleIsfetchingActionCreator = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const followingInProgressActionCreator = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

//thunk - функция, которая выполняет асинхронную работу и диспатчит экшены, чтобы ui не создаввал запросы к dal
//и все происходило в бизнес логике
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsfetchingActionCreator(true))
    dispatch(setCurrentPageActionCreator(currentPage))
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsfetchingActionCreator(false));
      dispatch(setUsersActionCreator(data.items));
      dispatch(setTotalUsersCountActionCreator(data.totalCount));
    });
  };
};

export const followThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(followingInProgressActionCreator(true, id))
    userAPI.followUser(id).then(data => {
        if (data.resultCode === 0) {
          dispatch(followActionCreator(id))
        }
        dispatch(followingInProgressActionCreator(false, id))
    })
  };
};

export const unfollowThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(followingInProgressActionCreator(true, id))
    userAPI.followUser(id).then(data => {
        if (data.resultCode === 0) {
          dispatch(followActionCreator(id))
        }
        dispatch(followingInProgressActionCreator(false, id))
    })
  };
};

export default userReducer;
