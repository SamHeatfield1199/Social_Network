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
 
};

const dialogsReducer = (state = initialState, action) => {
 

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return  {
         ...state, 
        messages: [...state.messages, { id: 7, message: body }] 
      };
      
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  };
};
export default dialogsReducer;
