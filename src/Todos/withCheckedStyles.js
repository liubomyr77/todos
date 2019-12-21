import React from 'react';

export const  withCheckedStyles = WrappedComponent => props => {
 
    const {todo : {completed}} = props;
       console.log(completed)
    const additionalStyles = completed ? { 
        color: 'red',
        textDecoration: 'line-through',
    } : {}; 
    return <WrappedComponent {...{ additionalStyles,...props}} />;
};