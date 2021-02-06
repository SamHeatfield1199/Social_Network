const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Nastya" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Vika" },
    { id: 5, name: "Tanya" },
    { id: 6, name: "Max" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Hi" },
    { id: 6, message: "Hi" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
 

  switch (action.type) {
     
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state,
        newMessageText : action.body
      }
      

    case SEND_MESSAGE:
      let body = state.newMessageText;
      return  {
         ...state, 
         newMessageText : "",
        messages: [...state.messages, { id: 7, message: body }] 
      };
      
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: text,
  };
};
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export default dialogsReducer;
