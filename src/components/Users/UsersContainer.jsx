import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      let action = followActionCreator(userid)
      dispatch(action);
    },
    unfollow: (userid) => {
        let action = unfollowActionCreator(userid)
        dispatch(action);
      },
      setUsers: (users) => {
        let action = setUsersActionCreator(users)
        dispatch(action);
      },
  }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
