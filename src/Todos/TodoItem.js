import React from 'react';
import { Text }  from './Text';
import { Icon } from './Icon';
import T from 'prop-types';
import { Checkbox } from './Checkbox';
import { withCheckedStyles } from './withCheckedStyles';
import { TodoText } from './TodoText';
import '../index';


export const TodoItem = withCheckedStyles(({todo,onSwitch,onRemove,onEdit, additionalStyles}) => {
      return (      
        <div className="item">
          <Checkbox  {...{todo, onSwitch}} /> 
          <Text {...additionalStyles}>{todo.title}</Text>
          <TodoText {...{todo, additionalStyles, onEdit}} />
          <Icon name ="remove" onClick={() => onRemove(todo._id)}/>  
        </div>       
    )
});

TodoItem.prototype = {
    todo: T.shape({
      _id : T.string.isRequired,
      text: T.string.isRequired,
      completed: T.bool.isRequired,
    }),
    onSwitch: T.func.isRequired,
    onRemove:T.func.isRequired,
    onEdit:T.func.isRequired,
    additionalStyles: T.shape({
    color: T.string.isRequired,
    textDecoration : T.string.isRequired,
    }).isRequired,
  };