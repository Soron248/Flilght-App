import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import store from "./app/store";
import { flightsApi } from "./features/flightsApiSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ApiProvider api={flightsApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);
