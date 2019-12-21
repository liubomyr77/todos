import React from 'react';
import T from 'prop-types';
import { TodoItem } from './TodoItem';
import  uuid from 'uuid';
import '../index.css'


export const TodoList = ({ todos, onSwitch ,onRemove ,onEdit}) => {    
     return (
        <div className="todolist">
            {todos.map(todo =>  {
                return (
                    <TodoItem {...{ todo,onSwitch,onRemove,onEdit }}   key={uuid()}/>                                       
                )
            })}
        </div>
    )
};

TodoList.prototype = {
    todo: T.shape({
      _id : T.string.isRequired,
      text: T.string.isRequired,
      completed: T.bool.isRequired,
    }),
    onSwitch: T.func.isRequired,
    onRemove:T.func.isRequired,
    onEdit:T.func.isRequired,
  };