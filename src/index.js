import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./reducers/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
