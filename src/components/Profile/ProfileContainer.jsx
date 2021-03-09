import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfie } from '../../api/api';
import { setUserProfileAC } from '../../redux/profileReducer';
import Profile from './Profile';

//делаем классовым, чтобы можно было сделать запрос
//делаем компоненту вручную
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userid = this.props.match.params.userid
    if (!userid) {
      userid = 2
    }
    getUserProfie(userid)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}
//работает как коннект, но закинет еще данные мз урла
let WithUrkDataContainerComponent = withRouter(ProfileContainer)

//connect получает данные от стора 
export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC
})(WithUrkDataContainerComponent);