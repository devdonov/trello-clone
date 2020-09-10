import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import "./styles.sass";
import { AppStateProvider } from "./AppStateContext";

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById("app")
);
