import React from 'react';
import { Link } from 'react-router';
import { TodoListContainer } from './../components'

const Todo = () => (
    <div>
        <Link to="/">Back to home</Link>
        <TodoListContainer />
    </div>
);

export default Todo;