import * as axios from 'axios'
import React from 'react'
//просто отрисовка
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                //<span className = {this.props.currentPage === p && styles.selectedPage}
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : "ссылка на картинку"} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
            </div>)
        }</div>
}
export default Users