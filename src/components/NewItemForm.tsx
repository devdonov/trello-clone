import * as React from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { useFocus } from '../hooks/useFocus';

export interface INewItemFormProps {
  onAdd(text: string): void
}

const NewItemForm: React.FC<INewItemFormProps> = (props) => {
  const [text, setText] = React.useState("");
  const { onAdd } = props;
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput ref={inputRef} onChange={ e => setText(e.target.value) } />
      <NewItemButton onClick={ _ => onAdd(text) }>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;