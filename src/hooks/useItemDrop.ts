import { useDrop } from "react-dnd";
import { DragItem, DRAG_TYPES } from "../types";
import { useAppState } from "../AppStateContext";

export const useItemDrop = (index: number) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: DRAG_TYPES.COLUMN,
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } })
    }
  })
  return { drop };
}