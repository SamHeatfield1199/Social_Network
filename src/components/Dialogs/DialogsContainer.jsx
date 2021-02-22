import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

//создаем контейнер с помощью react-redux
//двойные скобочки значат, что мы вызываем функцию вернувшуюся после вызова connect()

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { 
            dispatch(updateNewMessageBodyCreator(body))
         },
        sendMessage: () => { 
            dispatch(sendMessageCreator()) 
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)//моединили Dialods witn store
//рендерит диалогс и передвет пропсы сидящие в ф1 и ф2
export default DialogsContainer