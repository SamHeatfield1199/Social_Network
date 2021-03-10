import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
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
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

//вызывается функция, которую нам вернул первый вызов
//В данном случае берет диалог и закидывает в редирект, потом в коннект
/*compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/

//очередная обертка над компонентой. По английски HOC
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)//моединили Dialods witn store
//рендерит диалогс и передвет пропсы сидящие в ф1 и ф2
export default DialogsContainer