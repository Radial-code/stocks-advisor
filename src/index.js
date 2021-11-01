import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import FixedScreenProvider from "./contexts/FixedScreenProvider";
import LayoutChangerProvider from "./redux/LayoutChangerProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FixedScreenProvider>
          <LayoutChangerProvider>
            <App />
          </LayoutChangerProvider>
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
