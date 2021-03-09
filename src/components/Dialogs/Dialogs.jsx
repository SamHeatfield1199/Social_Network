import React from 'react';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
//презентационные компоненты получают только данные и коллбеки(вызовы функций)
const Dialogs = (props) => {

    let state = props.messagesPage

    //Получаем JSX компоненты
    let dialogsElements = state.dialogs.map(d =>
        <DialogItem id={d.id} name={d.name} />)

    let messagesElements = state.messages.map(m =>
        <Message message={m.message} />)

    let newMessageText = state.newMessageText

    //возвращаем значение из textarea
    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    if (props.isAuth === false) return <Redirect to = {"/login"}/>

    //Отрисовываем компоненты
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick} >Send</button></div>

                </div>
            </div>

        </div>
    )
}
export default Dialogs