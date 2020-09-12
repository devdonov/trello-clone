import { DragItem } from "../types"

export const isHidden = (
  isPreview: boolean | undefined,
  dragItem: DragItem | undefined,
  type: string,
  id: string
) => {
  return Boolean(!isPreview && dragItem && dragItem.type === type && dragItem.id === id)
}