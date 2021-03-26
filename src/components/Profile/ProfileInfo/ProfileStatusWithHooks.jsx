import React, { useEffect, useState } from 'react';

//хуки - некоторая функция, которые нельзя использовать в условиях,
//в циклах и тд


/*
VirtualDOM - то, благодаря чему ReactJS так взлетел.
 Он говорит: настоящий DOM - это дорого, это перерисовки, 
 это ресурсы, дёрганья, и так далее... Давайте Я (REACT) брать брать
  JSX из компонент и на основе его формировать Virtual DOM - набор
   оъектов, из который потом буду превращать в настоящий DOM. 
   Зачем этот промежуточный слой нужен?
Для того, чтобы прежде чем идти на основе Virtual DOM строить 
настоящий DOM... Я смогу сравнить тот VirtualDOM, который у меня 
уже был, с тем, который я получил в текущей отрисовке из компонент,
 и... Сравнить их. И если изменения есть, я пойду и точечно эти
  изменения перерисую в настоящем DOM.

Как результат - коллосальный прирост производительности по сравнению с тем, как с DOM работали раньше (шаблонизаторы, innerHTML и так далее)...
*/


const ProfileStatusWithHooks = (props) => {
    //локальный стейт. возвращает массив и в нем сидит два элемента
    //первый - название массива, второй - функция, которая будет изменять одиночное значение

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    //закидываем функцию, которая будет выполняться после отрисовки страницы
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }



    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b>:
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "-----"}
                    </span>
                </div>
            }

            {editMode &&
                <div>
                    {/*blur срабатывает если элемент в фокусе*/}

                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;