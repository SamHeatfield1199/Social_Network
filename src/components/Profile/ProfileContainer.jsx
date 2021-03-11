import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfileTC, setUserProfileAC, setUserStatusAC, setUserStatusTC, updateUserStatusTC } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import Profile from './Profile';

//делаем классовым, чтобы можно было сделать запрос
//делаем компоненту вручную
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userid = this.props.match.params.userid
    if (!userid) {
      userid = 2
    }
    this.props.getUserProfile(userid)
    setTimeout(
      () =>{
        this.props.getUserStatus(userid)
      }, 1000
    )
   
  }

  render() {
    //редирект на страницу логина. если не хотим показывать контент незарегестрированным пользователям, хорошее решение
    return (
      <div>
        <Profile {...this.props}
         profile={this.props.profile} 
         status ={this.props.status}
         updateUserStatus = {this.props.updateUserStatus}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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
  withAuthRedirect
)(ProfileContainer)