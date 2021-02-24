import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, toggleIsfetchingActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import UsersAPIComponent from './UsersAPIComponent';
import Users from './UsersAPIComponent';
//обеспечивает связь со стором презентационной компоненты, прокидывает коллбэки

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsfetchingActionCreator(isFetching))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
