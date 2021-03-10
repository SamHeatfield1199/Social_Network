import React from 'react';
import { connect } from 'react-redux';
import preloader from '../../images/2.gif';
import { followActionCreator, followingInProgressActionCreator, followThunkCreator, getUsersThunkCreator, setCurrentPageActionCreator, unfollowActionCreator, unfollowThunkCreator } from '../../redux/usersReducer';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import Users from './Users';

//контейерная компонета занимается побочными эффектами функции
class UsersContainer extends React.Component {
  //ajax является побочым эффектом, что не подходит чистой функции
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <img src={preloader} /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followInProgress={this.props.followInProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default withAuthRedirect(connect(mapStateToProps, {
  follow: followThunkCreator,
  setCurrentPage: setCurrentPageActionCreator,
  followInProgress: followingInProgressActionCreator,
  getUsers: getUsersThunkCreator,
  unfollow: unfollowThunkCreator,

})
  (UsersContainer))



