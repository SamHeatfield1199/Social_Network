import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import preloader from '../../images/2.gif';
import {
  followingInProgressActionCreator,
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageActionCreator,
  unfollowThunkCreator
} from '../../redux/usersReducer';
import {getUser, 
  getPageSize, 
  getTotalUsersCount, 
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,} from '../../redux/usersSelectors'
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
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow: followThunkCreator,
    setCurrentPage: setCurrentPageActionCreator,
    followInProgress: followingInProgressActionCreator,
    getUsers: getUsersThunkCreator,
    unfollow: unfollowThunkCreator,

  }),
  withAuthRedirect
)(UsersContainer)


