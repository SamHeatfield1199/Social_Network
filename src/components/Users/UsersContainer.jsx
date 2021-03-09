import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../api/api';
import preloader from '../../images/2.gif';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, toggleIsfetchingActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';

//контейерная компонета занимается побочными эффектами функции
class UsersContainer extends React.Component {
    //ajax является побочым эффектом, что не подходит чистой функции
    componentDidMount() {
        //запрос на сервер для получения пользователей
        this.props.toggleIsFetching(true)
        
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
        {this.props.isFetching ? <img src = {preloader}/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
    }
  }
  
  export default connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setTotalUsersCount: setTotalUsersCountActionCreator,
    toggleIsFetching: toggleIsfetchingActionCreator
  })
    (UsersContainer)
  


