import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/AuthRedirect';
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

//вызывается функция, которую нам вернул первый вызов
//В данном случае берет диалог и закидывает в редирект, потом в коннект
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)

)(Dialogs)
