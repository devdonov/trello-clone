import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";

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
    </AppContainer>
)

export default App;