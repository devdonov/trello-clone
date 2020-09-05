import * as React from "react";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";

interface AddNewItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem: React.FC<AddNewItemProps> = ({
    toggleButtonText,
    onAdd,
    dark
}) => {
    const [showForm, setShowForm] = React.useState(false);

    if (showForm) {
        <NewItemForm
            onAdd={text => {
                onAdd(text);
                setShowForm(false);
            }}
        />
    }

    return (
        <AddItemButton dark={dark} onClick={ _ => setShowForm(true) }>
            {toggleButtonText}
        </AddItemButton>
    )
}