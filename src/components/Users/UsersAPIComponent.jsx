import * as axios from 'axios'
import React from 'react'
import Users from './Users'
import preloader from '../../images/2.gif'

//контейерная компонета занимается побочными эффектами функции
class UsersAPIComponent extends React.Component {
    //ajax является побочым эффектом, что не подходит чистой функции
    componentDidMount() {
        //запрос на сервер для получения пользователей
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
export default UsersAPIComponent


