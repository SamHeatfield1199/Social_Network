import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfileTC, setUserProfileAC, setUserStatusAC, setUserStatusTC, updateUserStatusTC } from '../../redux/profileReducer';
import Profile from './Profile';

//делаем классовым, чтобы можно было сделать запрос
//делаем компоненту вручную
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userid = this.props.match.params.userid
    if (!userid) {
      userid = this.props.authedUserid
    }
    this.props.getUserProfile(userid)
    this.props.getUserStatus(userid)
   
  }

  render() {
    //редирект на страницу логина. если не хотим показывать контент незарегестрированным пользователям, хорошее решение
    return (
        <Profile {...this.props}
         profile={this.props.profile} 
         status ={this.props.status}
         updateUserStatus = {this.props.updateUserStatus}/>
     
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authedUserid : state.auth.userid,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    getUserProfile: getUserProfileTC,
    getUserStatus: setUserStatusTC,
    updateUserStatus: updateUserStatusTC,
  }),
  withRouter,
  
)(ProfileContainer)