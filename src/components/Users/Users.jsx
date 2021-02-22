import * as axios from 'axios'
import React from 'react'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            //запрос на сервер для получения пользователей
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
        }

    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img stc={u.photos.small != null ? u.photos.small : "ссылка на картинку"}></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={
                                () => {
                                    props.unfollow(u.id)
                                }
                            }>Unfollow</button>
                            : <button onClick={
                                () => {
                                    props.follow(u.id)
                                }
                            }>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }</div>
}

export default Users 