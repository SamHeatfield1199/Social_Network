import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

//методы,которые диспатчат данные в стейт
let mapDispatchToProps = (dispatch) => {
  return {

    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountActionCreator(totalUsersCount))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
