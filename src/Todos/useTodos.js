import  {useEffect, useReducer} from 'react';
import { todosReducer, initialState, TODOS_ACTIONS } from './todosReducer';
 
 

export const useTodos = () => {
    const[todos, dispatch] = useReducer( todosReducer,initialState());

    useEffect(() => {
        const todosStringify =JSON.stringify(todos);
        localStorage.setItem('todos',todosStringify);        
    },[todos]);
    
    const addTodos = text => dispatch({
        text,
        type: TODOS_ACTIONS.ADD,
    });
    
    const onSwitch = _id => dispatch({
        _id,
        type: TODOS_ACTIONS.COMPLETE
    });
    const onRemove = _id => dispatch({
        _id,
        type: TODOS_ACTIONS.REMOVE
    });
    const onEdite = newTodo => dispatch({
        newTodo,
        type: TODOS_ACTIONS.EDITE
    });
    return {
        todos,
        onRemove,
        onSwitch,
        addTodos,
        onEdite
    };
};