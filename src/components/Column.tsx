import * as React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

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
    </ColumnContainer>
)