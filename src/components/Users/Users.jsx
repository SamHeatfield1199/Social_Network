import * as axios from 'axios'
import React from 'react'

//через классовые компоненты пишем
class Users extends React.Component {

    componentDidMount() {
        //запрос на сервер для получения пользователей
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return <div>
            <div>
                {pages.map(p => {
                    //<span className = {this.props.currentPage === p && styles.selectedPage}
                    return <span onClick={(e) => {
                        this.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : "ссылка на картинку"} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }
                                }>Unfollow</button>
                                : <button onClick={
                                    () => {
                                        this.props.follow(u.id)
                                    }
                                }>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </div>)
            }</div>

    }
}
export default Users


