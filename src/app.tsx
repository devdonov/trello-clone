import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";

const App = () => (
    <AppContainer>
        <Column title="To Do">
            <Card text="Generate something." />
        </Column>
        <Column title="In Progress">
            <Card text="Learn Typescript" />
        </Column>
        <Column title="Done">
            <Card text="Begin to use static typing" />
        </Column>
        <AddNewItem
            toggleButtonText="+ Add another list"
            onAdd={console.log}
        />
    </AppContainer>
)

export default App;