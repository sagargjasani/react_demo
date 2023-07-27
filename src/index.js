import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
