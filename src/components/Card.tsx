import * as React from "react";
import { CardContainer } from "../styles";

interface ICard {
    text: string
}

export const Card: React.FC<ICard> = ({ text }) => (
    <CardContainer>
        { text }
    </CardContainer>
)