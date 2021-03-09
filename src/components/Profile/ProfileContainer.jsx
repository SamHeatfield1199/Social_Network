import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../api/api';
import { getUserProfileTC, setUserProfileAC } from '../../redux/profileReducer';
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
  }

  render() {
    //редирект на страницу логина. если не хотим показывать контент незарегестрированным пользователям, хорошее решение
    if (this.props.isAuth === false) return <Redirect to = {"/login"}/>
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}
//работает как коннект, но закинет еще данные мз урла
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//connect получает данные от стора 
export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
  getUserProfile: getUserProfileTC
})(WithUrlDataContainerComponent);