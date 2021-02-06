import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  //наши данные
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likesCount: "1" },
        { id: 2, message: "HIt`s my first post", likesCount: "23" },
      ],
      newPostText: "dfgb",
    },

    messagesPage: {
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
    },
  },
  //получить данные
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("h");
  },

  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  //узнаем, когда меняются наши данные для перерисовки
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  //обрабатываем действия ui
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
window.store = store;
