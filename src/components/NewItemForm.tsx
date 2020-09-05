import * as React from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';

export interface INewItemFormProps {
  onAdd(text: string): void
}

const NewItemForm: React.FC<INewItemFormProps> = (props) => {
  const [text, setText] = React.useState("");
  const { onAdd } = props;
  return (
    <NewItemFormContainer>
      <NewItemInput onChange={ e => setText(e.target.value) } />
      <NewItemButton onClick={ _ => onAdd(text) } />
    </NewItemFormContainer>
  );
}

export default NewItemForm;