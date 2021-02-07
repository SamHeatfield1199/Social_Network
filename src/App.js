import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
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
          path="/profile"
          render={() => (
            <Profile //store={props.store} dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
