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
import preloader from './images/2.gif';
import { initializeAppTC } from "./redux/appReducer";

/*
Какие момент ынужно помнить и понимать на мой скромный взгляд, когда вас спросят про фистую функцию?
1. immutability (имьютабельность, неизменяемость) - входные данные, пришедшие в функцию, эта функция не должна менять (речь про объекты и массивы, так как по ссылке они передаются, поэтому делаем копию)
2. отсутствие side-effects (пункт 1 связан с этим, а так же использование глобальных переменных, их модификация, асинхронные операции и что-то может быть ещё)
3. детерменированность\идемпотентность  -  сколько бы раз на вход чистой функции не подавали одно и тоже, на выходе чистой функции должен быть один и тот же результат
4. чистая функция должна вернуть (return) что-либо)))
*/




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
