//Селектор - функция, которая получает state целиком, достает то, что нужно 
//и возвращает в бизнес

import { createSelector } from "reselect"
//возвращает селектор

//библиотека реселект вызовет селекторы юзерс и фетчинг, если есть необходимость
//т.е. они не будут перерисовываться если в них нет необходимости
//оптимизация. синк эбаут зис

const getUsersSelector = (state) =>{
    return state.usersPage.users
}
export const getUsers =  createSelector (getUsersSelector, (users) =>{
    return users.filter(u=>true)
})


export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) =>{
    return  state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) =>{
    return  state.usersPage.currentPage
}
export const getIsFetching = (state) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}
export const getUsersSuperSelector = createSelector( getUsers, getIsFetching,
    (users, isFetching) =>{
  return users.filter(u=>true)
})