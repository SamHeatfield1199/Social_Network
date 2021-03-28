import React from "react";
import { connect, Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withSuspense } from "./components/hoc/withSuspense";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import preloader from "./images/2.gif";
import { initializeApp } from "./redux/appReducer";

/*
Какие момент ынужно помнить и понимать на мой скромный взгляд, когда вас спросят про фистую функцию?
1. immutability (имьютабельность, неизменяемость) - входные данные, пришедшие в функцию, эта функция не должна менять (речь про объекты и массивы, так как по ссылке они передаются, поэтому делаем копию)
2. отсутствие side-effects (пункт 1 связан с этим, а так же использование глобальных переменных, их модификация, асинхронные операции и что-то может быть ещё)
3. детерменированность\идемпотентность  -  сколько бы раз на вход чистой функции не подавали одно и тоже, на выходе чистой функции должен быть один и тот же результат
4. чистая функция должна вернуть (return) что-либо)))
*/

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

/*
Самураи, привет. Зачем нужен React.lazy??? 
Ответ: чтобы в основной bundle (собранный для браузера большой общий js-файл) не попадали некоторые компоненты, которые с большой вероятностью не будут посещены большинством пользователей. А значит можно уменьшить размер итоговой сборки, чтобы ускорить стартовую загрузку всего приложения.

А тем компоненты, которые мы import-ируем лениво (React.lazy), они будут собраны в другие сборки-файлики и подгружены будут по сети по мере надобности. А может и вовсе не будут, если этой надобности не будет. Факт: мы загружаем только то, что нужно. А то что не загрузили, но оно понадобилось - подгрузим лениво в момент необходимости.

Да, пользователь из-за ленивой подгрузки контента (React.lazy) в момент обращения будет видеть ПУСТОТУ... Потому что React-у нечего отобразить... 

Чтобы не было этой пустоты и пользователь понимал, что данные (а именно компоненты) грузятся - мы должны показать какую-то заглушку (fallback)... Для этого и нужен нам компонент React.Suspense
*/

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div>
          <img src={preloader} />
        </div>
      );
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Switch>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />

            <Route
              path="/profile/:userid?"
              render={withSuspense(ProfileContainer)}
            />

            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      </div>
    );
  }
}
//когда мы коннектим компоненту у нас сбивается роут
//Поэтому оберенм его еще withRouter

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MyfirstApp = (store) => {
  //функция, которая перерисовывает содержимое страницы
  //у connect свой локальный subscribe, поэтому нет смысла вызывыать его здесь
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MyfirstApp;
