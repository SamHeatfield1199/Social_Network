import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

//HOC позволяет нам создавать однотипные контейнерные компоненты 
//для разных целевых компонент. А задача контейнерной компоненты -4/
// дать целевой презентационной компоненте какие-то данные\поведение.


//т.к. коннектится к стору спойкойно берет необходимые пропсы
const mapStateToPropsForRedirect = (state) => {
  return {
      isAuth: state.auth.isAuth
  }
}
//компонента хок для переадрисации на страницу логина.
//Передаем в нее компоненту которую необходимо перерисовать в случае если пользователь залогинен
export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }


let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent;
};
