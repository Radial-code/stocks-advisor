import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import FixedScreenProvider from "./contexts/FixedScreenProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FixedScreenProvider>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </FixedScreenProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
