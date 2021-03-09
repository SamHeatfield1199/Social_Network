import React from 'react'
import { NavLink } from 'react-router-dom'
import { followUser, unfollowUser } from '../../api/api'
import classes from './Users.module.css'
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
                        <NavLink to={'/profile/' + u.id}>
                            < img src={u.photos.small != null ? u.photos.small : "https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png"} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled ={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                                props.followInProgress(true, u.id)
                                unfollowUser(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.followInProgress(false, u.id)
                                })
                            }
                            }>Unfollow</button>
                            : <button disabled ={props.followingInProgress.some(id => id === u.id)}  onClick={
                                () => {
                                    props.followInProgress(true, u.id)
                                        followUser(u.id).then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.followInProgress(false, u.id)
                                        })
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