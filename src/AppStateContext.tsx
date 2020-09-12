import * as React from "react";
import { nanoid } from 'nanoid';
import { findItemIndexById } from "./utils/findItemIndexById";
import { moveItem } from "./utils/moveItem";
import { DragItem } from "./types";

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
  lists: List[],
  draggedItem?: DragItem
}

export type Action = {
  type: "ADD_LIST",
  payload: string
} | {
  type: "ADD_TASK",
  payload: { text: string, listId: string }
} | {
  type: "MOVE_LIST",
  payload: {
    dragIndex: number;
    hoverIndex: number;
  }
} | {
  type: "SET_DRAGGED_ITEM",
  payload: DragItem | undefined
} | {
  type: "MOVE_TASK",
  payload: {
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string
  }
}

interface AppStateContextProps {
  state: AppState,
  dispatch: React.Dispatch<Action>
}

const appData: AppState = {
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

const appStateReducer = (state: AppState, props: Action):AppState => {
  switch (props.type) {
    case "ADD_LIST": {
      const {lists, ...rest} = state;
      return {
        lists: [...lists, { id: nanoid(), text: props.payload, tasks: [] }],
        ...rest
      };
    }
    case "ADD_TASK": {
      const {listId, text} = props.payload
      const goalIndex = findItemIndexById(state.lists, listId);
      state.lists[goalIndex].tasks.push({ id: nanoid(), text });

      return {
        ...state
      }
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = props.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);

      return {
        ...state
      }
    }
    case "SET_DRAGGED_ITEM": {
      return {
        ...state,
        draggedItem: props.payload
      }
    }
    case "MOVE_TASK": {
      const {
        dragIndex,
        hoverIndex,
        sourceColumn,
        targetColumn
      } = props.payload;
      const sourceLaneIndex = findItemIndexById(state.lists, sourceColumn);
      const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
      const item = state.lists[sourceLaneIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);

      return {
        ...state
      }
    }
    default:
      return state;
  }
}

const AppStateContext = React.createContext<AppStateContextProps>({ state: {} } as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData); 
  return (
    <AppStateContext.Provider value={{ state, dispatch }} >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
