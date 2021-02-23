const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALUSERSCOUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [
    {
      id: 1,
      photos: "",
      followed: true,
      fullName: "Dima",
      status: "I'm boss",
    },
    {
      id: 2,
      photos: "",
      followed: true,
      fullName: "Dima",
      status: "I'm boss",
    },
    {
      id: 3,
      photos: "",
      followed: true,
      fullName: "Dima",
      status: "I'm boss",
    },
    {
      id: 4,
      photos: "",
      followed: true,
      fullName: "Dima",
      status: "I'm boss",
    },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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

export default userReducer;
