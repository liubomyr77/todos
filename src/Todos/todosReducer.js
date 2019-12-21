import  uuid from 'uuid';

export const TODOS_ACTIONS = {
   ADD: 'add',
   COMPLETE: 'complete',
   REMOVE: 'remove',
   EDITE: 'edite'

 }; 

export const initialState = () => {
    const todosFromStorage = localStorage.getItem("todos");
    const todosParsed = JSON.parse(todosFromStorage);
    return todosParsed || []
};

export const todosReducer = (todos, action) => {
    switch (action.type) {
        case TODOS_ACTIONS.ADD :  return [
            ...todos,
            {
             _id: uuid(),
             text: action.text,
             completed: false
        }];
        case TODOS_ACTIONS.COMPLETE: 
        return  todos.map(
            todo => action._id === todo._id 
            ? {...todo, completed: !todo.completed} 
            : todo
        );
        case TODOS_ACTIONS.REMOVE: 
        return  todos.filter(
            todo =>  action._id !== todo._id,
        );
        case TODOS_ACTIONS.EDITE: 
        return  todos.map(
        
            todo =>  todo._id === action.newTodo._id ? action.newTodo : todo,
        );

        default : return todos
    }
};