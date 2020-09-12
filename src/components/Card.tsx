import * as React from "react";
import { CardContainer } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { useItemDrag } from "../hooks/useItemDrag";
import { useAppState } from "../AppStateContext";
import { DRAG_TYPES } from "../types";
import { useTaskDrop } from "../hooks/useTaskDrop";

interface ICard {
    text: string;
    id?: string;
    columnId?: string;
    index?: number;
}

export const Card: React.FC<ICard> = ({ text, columnId, id, index }) => {
    const { drag } = useItemDrag({ type: DRAG_TYPES.CARD, id, index, text, columnId });
    const { drop } = useTaskDrop(index, id, columnId);
    const ref = React.useRef<HTMLDivElement>(null)

    drag(drop(ref));

    return (
        <CardContainer ref={ref}>
            { text }
        </CardContainer>
    )
}