import React from 'react';

const Todo = ({todo}) => {
    console.log(todo);
    const {description} = todo;
    return (
        <div>
            <h1>{description}</h1>
        </div>
    );
};

export default Todo;