import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
//просто отрисовка
let User = (
    { user, followingInProgress, unfollow, follow }
    ) => {
        return <div>
        <span>
            <div className={classes.image}>
                <NavLink to={'/profile/' + user.id}>
                    < img src={user.photos.small != null ? user.photos.small :
                        "https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png"}
                    />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }
                    }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={
                        () => {
                            follow(user.id)
                        }
                    }>Follow</button>
                }
            </div>
        </span>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>
    </div>
    }
    export default User