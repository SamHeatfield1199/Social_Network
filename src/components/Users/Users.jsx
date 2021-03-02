import * as axios from 'axios'
import classes from './Users.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
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
                    <div className={classes.image}>
                        <NavLink to = {'/profile/' + u.id}>
                            < img src={u.photos.small != null ? u.photos.small : "https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png"} />
                        </NavLink>
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
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </div>)
        }</div>
}
export default Users