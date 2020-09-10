import * as React from "react";

const { useContext, useReducer } = React;

export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface AppState {
  lists: List[]
}

interface AppStateContextProps {
  state: AppState
}

const appState: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate App scaffold" }]
    },
    {
      id: "1",
      text: "To Do",
      tasks: [{ id: "c1", text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: "To Do",
      tasks: [{ id: "c2", text: "Begin to use static typing" }]
    },
  ]
};

const AppStateContext = React.createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appState }} >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}