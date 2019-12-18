import React from 'react';
import {Text} from './Text';
import { Icon } from './Icon';
import { TodoInput } from './TodoInput';

export const Todos = () => { 
    return (
        <div className="todos">
               <Text size='50px'>Todos</Text>
               <Icon name="remove" /> 
               <TodoInput onAdd={e =>console.log(e)} />
        </div>
    ) 
};