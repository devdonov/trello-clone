import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./AppStateContext";

const App = () => {
    const {state} = useAppState();

    return (
        <AppContainer>
            {
                state.lists.map(i => (
                    <Column title={i.text} key={i.id} index={i} />
                ))
            }
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
            />
        </AppContainer>)
}

export default App;