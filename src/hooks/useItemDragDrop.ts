import { useDrag, useDrop } from "react-dnd"
import { DragItem } from "../types"
import { useAppState } from "../AppStateContext";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDragDrop = (item: DragItem, index: number) => {
  const { dispatch } = useAppState();

  const [, drag, preview] = useDrag({
    item,
    begin: () => 
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item
      }),
    end: () => 
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: undefined
      })
  });


  const [, drop] = useDrop({
    accept: item.type,
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    }
  })


  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return { drag, drop }
}