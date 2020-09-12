import { useDrop } from "react-dnd"
import { DragItem, DRAG_TYPES, CardDragItem } from "../types"
import { useAppState, Action } from "../AppStateContext";
import { useItemDrag } from "./useItemDrag";

type ListData = {
  id: string
  index: number
}
type Handler = (item: DragItem, currentItem: ListData, dispatch: React.Dispatch<Action>) => void

const handlers: Record<DRAG_TYPES, Handler> = {
  [DRAG_TYPES.COLUMN](item, { index }, dispatch) {
    const dragIndex = item.index;
    const hoverIndex = index;

    if (dragIndex === hoverIndex) return;

    dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
    item.index = hoverIndex;
  },


  [DRAG_TYPES.CARD](item: CardDragItem, { id }, dispatch) {
    const dragIndex = item.index;
    const hoverIndex = 0;
    const sourceColumn = item.columnId
    const targetColumn = id;

    if (sourceColumn === targetColumn) return;

    dispatch({ type: "MOVE_TASK", payload: { dragIndex, hoverIndex, sourceColumn, targetColumn } });
    item.index = hoverIndex;
    item.columnId = targetColumn;
  }
}

export const useListDragDrop = (item: DragItem, currentItem: ListData) => {
  const { dispatch } = useAppState();
  const { drag } = useItemDrag(item);

  const [, drop] = useDrop({
    accept: [DRAG_TYPES.CARD, DRAG_TYPES.COLUMN],
    hover(item: DragItem) {
      handlers[item.type](item, currentItem, dispatch);
    }
  })

  return { drag, drop }
}