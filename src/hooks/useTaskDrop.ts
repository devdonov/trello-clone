import { useDrop } from "react-dnd";
import { DRAG_TYPES, CardDragItem } from "../types";
import { useAppState } from "../AppStateContext";

export const useTaskDrop = (index: number, id: string, columnId: string) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: DRAG_TYPES.CARD,
    hover(item: CardDragItem) {
      if (item.id === id) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId

      dispatch({ type: "MOVE_TASK", payload: {
        dragIndex, hoverIndex, sourceColumn, targetColumn
      } })
      item.index = hoverIndex;
      item.columnId = targetColumn;
    }
  })
  return { drop };
}