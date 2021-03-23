import React, { useState } from 'react'
import classes from './Paginator.module.css'



let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    //хук
    let { portionNumber, setPortionNumber } = useState(1)
    let leftPoryionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPoryionPageNumber = portionNumber * portionSize



    return <div className={classes.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>
        }



        {pages.filter(p => p >= leftPoryionPageNumber && p <= rightPoryionPageNumber)
            .map(p => {
                return <span className=
                    {
                        cn({
                            [classes.selectedPage]: currentPage === p
                        }
                            , classes.selectedPage)}
                    onClick={
                        (e) => {
                            onPageChanged(p)
                        }
                    }
                >
                    {p}
                </span>
            })}

        {
            portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
        }
    </div>

}
export default Paginator