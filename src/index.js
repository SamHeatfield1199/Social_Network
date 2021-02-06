import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux_store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

//функция, которая перерисовывает содержимое страницы
//у connect свой локальный subscribe, поэтому нет смысла вызывыать его здесь 
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );


reportWebVitals();
