import * as React from "react";
import * as ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { TouchBackend as Backend } from "react-dnd-touch-backend";
import App from "./app";
import "./styles.sass";
import { AppStateProvider } from "./AppStateContext";

ReactDOM.render(
  <DndProvider backend={Backend} options={{ enableMouseEvents: true }} >
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById("app")
);
