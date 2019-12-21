import React,{useState, useEffect} from 'react';
import T from  'prop-types';

export const Checkbox = ({ todo, onSwitch }) => {
const [checked, setState]= useState(true);     
const onChange = event => {
      
    onSwitch(event.target.value);
      console.log( setState(!checked) );  
    
};  
  useEffect(() => {
    setState(todo.completed);
    },[todo.completed]);

    return <input 
                type="checkbox"
                onChange={onChange} 
                value ={todo._id}
                {...{checked}}
            />
};

Checkbox.prototype = {
  todo: T.shape({
    _id : T.string.isRequired,
    text: T.string.isRequired,
    completed: T.bool.isRequired,
  }),
  onSwitch: T.func.isRequired,
};