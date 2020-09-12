export enum DRAG_TYPES {
    COLUMN = "COLUMN",
    CARD = "CARD"
}

export type ColumnDragItem = {
  index: number
  id: string
  text: string
  type: DRAG_TYPES.COLUMN
}

export type CardDragItem = {
  index: number
  id: string
  columnId: string
  text: string
  type: DRAG_TYPES.CARD
}

export type DragItem = ColumnDragItem | CardDragItem;
