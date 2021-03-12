import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
import { Textarea } from '../common/formsControls/FormsControls';
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
    let newMessageText = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    //Отрисовываем компоненты
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your message"
                    validate ={[requiredField, maxLength ]} />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs