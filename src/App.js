import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
            // state = {props.state.messagesPage}
            //store={props.store}
            //dispatch={props.dispatch}
            // dispatch ={props.dispatch}
            />
          )}
        />

        <Route
          path="/profile/:userid?"
          render={() => (
            <ProfileContainer 
            //store={props.store} dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
