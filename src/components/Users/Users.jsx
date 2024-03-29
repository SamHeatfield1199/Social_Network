import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User.jsx'
//просто отрисовка
let Users = (
    { currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }
) => {
    return <div>
        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={u.id} />)
            }
        </div>
    </div>
}
export default Users