import React , {useState} from 'react';
import T from 'prop-types';

export const TodoInput = ({onAdd, initialValue}) => {
    const[value, setInputValue] = useState(initialValue  ); 

  const onChange = event => setInputValue(event.target.value);
 

  const onSubmit = event => {
    event.preventDefault();   
    if (value==='') return; 
    onAdd(value);   
    setInputValue('');
    console.log('st'+value);

  };
 return (
     <form onSubmit ={onSubmit}>
         <input {...{ value }} onChange={onChange} />
     </form>
 )
};

TodoInput.propTypes = {
  onAdd: T.func.isRequired,
  initialValue: T.string,
};
TodoInput.defaultProps = {
  initialValue: '',
};