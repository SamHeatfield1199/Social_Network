import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeAppTC } from "./redux/appReducer";
import preloader from './images/2.gif';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){return <div><img src={preloader} /></div>}
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile/:userid?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
//когда мы коннектим компоненту у нас сбивается роут
//Поэтому оберенм его еще withRouter

const mapStateToProps = (state) => ({
 initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp: initializeAppTC}))
  (App)
