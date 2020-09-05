import * as React from "react";
import { CardContainer } from "../styles";
import { AddNewItem } from "./AddNewItem";

interface ICard {
    text: string
}

export const Card: React.FC<ICard> = ({ text }) => (
    <CardContainer>
        { text }
    </CardContainer>
)