import * as React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";
import { Card } from "./Card";

interface IColumn {
    title: string;
    children?: React.ReactNode;
    index: number;
}

export const Column: React.FC<IColumn> = ({ title, index }) => {
    const {state, dispatch} = useAppState();
    const {id: listId, tasks} = state.lists[index];
    
    return (
        <ColumnContainer>
            <ColumnTitle>
                { title }
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