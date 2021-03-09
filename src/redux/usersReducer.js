const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALUSERSCOUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
        followingInProgress: action.isFetching ?
        [...state.followingInProgress, action.userId ] 
        : state.followingInProgress.filter(id => id != action.userId),
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
    userId
  };
};

export default userReducer;
