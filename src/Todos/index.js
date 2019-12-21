import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList}  from './TodoList';
import {useTodos} from './useTodos';


export const Todos = () => {   
   const {
    todos,
    addTodos,
    onSwitch,
    onEdit,
    onRemove
    } = useTodos();
        return (
            <div className="todos">
                <TodoInput onAdd={addTodos} />
                <TodoList  {...{todos, onSwitch, onRemove, onEdit}} />
            </div>
    ) 
};