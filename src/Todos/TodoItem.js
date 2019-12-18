import React from 'react';
import T from 'prop-types';



export const TodoItem = ({todoTitle}) => {
    return (
        <div className="todolist">
            < CheckBox />
            <Text>{todoTitle}</Text>
            <Icon name ="remove"/>
        </div>
    )
};