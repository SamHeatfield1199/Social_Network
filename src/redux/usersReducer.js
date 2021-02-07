const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";

let initialState = {
    users: [
      { id: 1, photoURL: '', followed: true, fullName: "Dima", status: "I'm boss",
       location: {city: "Minsk", country: "Bellarus"}},
       { id: 2, photoURL: '', followed: true, fullName: "Dima", status: "I'm boss",
       location: {city: "Minsk", country: "Bellarus"}},
       { id: 3, photoURL: '', followed: true,  fullName: "Dima", status: "I'm boss",
       location: {city: "Minsk", country: "Bellarus"}},
       { id: 4, photoURL: '', followed: true,  fullName: "Dima", status: "I'm boss",
       location: {city: "Minsk", country: "Bellarus"}},
     
    ],
  };


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return { 
               
                ...state, 
                //users: {...state.users}
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                } )
            
        }
        case UNFOLLOW:
            return {
                ...state, 
                //users: {...state.users}
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                } )
            }

            case SETUSERS:
                return {
                    ...state, 
                    //склеиваем два массива те что были и те
                    users: {...state.users, ...action.users}
                   
                }
    

        default:
          return state;
      }
  };
  
  export const followActionCreator = (userId) => {
    return {
      type: FOLLOW, 
      userId
    };
  };
  export const unfollowActionCreator = (userId) => {
    return {
      type: UNFOLLOW,
      userId
    };
  };

  export const setUsersActionCreator = (users) => {
    return {
      type: SETUSERS,
      users
    };
  };
  export default userReducer;
  