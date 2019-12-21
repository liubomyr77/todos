import React,{useState,useEffect} from 'react';
import { Text } from './Text';
import { TodoInput  } from './TodoInput';
 
export const TodoText = ({ todo, onEdit, additionalStyles }) => {
    const [isEditable, setisEditable] = useState(false);
  
    const onClick = () => {        
        setisEditable(true);}

    const onSaveChanges = text => {
          console.log(text)
        setisEditable(false);
        onEdit({...todo, text});
    };
    useEffect(() => console.log(todo.text),[]);
    return isEditable
        ?  <TodoInput onAdd={onSaveChanges} initialValue = {todo.text}/> 
        : (<Text size = "10px" {...additionalStyles} onClick={onClick}>
              {todo.text}
           </Text>
          )
};
