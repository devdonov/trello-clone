import * as React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";

interface IColumn {
    title: string,
    children?: React.ReactNode
}

export const Column: React.FC<IColumn> = ({ title, children }) => (
    <ColumnContainer>
        <ColumnTitle>
            { title }
        </ColumnTitle>
        { children }
        <AddNewItem
            dark
            toggleButtonText="+ Add another list"
            onAdd={console.log}
        />
    </ColumnContainer>
)