import * as React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";
import { Card } from "./Card";
import { useItemDragDrop } from "../hooks/useItemDragDrop";
import { isHidden } from "../utils/isHidden";
import { DRAG_TYPES } from "../types";

interface IColumn {
    text: string;
    children?: React.ReactNode;
    index: number;
    id: string;
    isPreview?: boolean;
}

export const Column: React.FC<IColumn> = ({ text, index, isPreview }) => {
    const { state, dispatch } = useAppState();
    const { id: listId, tasks } = state.lists[index];
    const { drag, drop } = useItemDragDrop({ type: DRAG_TYPES.COLUMN, id: listId, index, text }, index);
    const ref = React.useRef<HTMLDivElement>(null);
    drag(drop(ref));

    return (
        <ColumnContainer
            ref={ref}
            isDragging={!!state.draggedItem && state.draggedItem.type === DRAG_TYPES.COLUMN}
            isPreview={isPreview}
            isHidden={isHidden(isPreview, state.draggedItem, DRAG_TYPES.COLUMN, listId)}
        >
            <ColumnTitle>
                { text }
            </ColumnTitle>

            {tasks.map(task => (
                <Card text={task.text} key={task.id} />
            ))}

            <AddNewItem
                dark
                toggleButtonText="+ Add another list"
                onAdd={text => {
                    dispatch({ type: "ADD_TASK", payload: { listId, text } })
                }}
            />
        </ColumnContainer>
    )
}