import React , {useState} from 'react';

export const TodoInput = ({onAdd}) => {
    const[state, setState] = useState(); 

  const onChange = event => {
      setState(event.target.value)
  };  

  const onSubmit = event => {
    event.preventDefault();
    onAdd(state)
  };
 return (
     <form onSubmit ={onSubmit}>
         <input {...{state}} onChange={onChange}/>
     </form>
 )
};