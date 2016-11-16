import React, { PropTypes } from 'react';
import { TodoListItem } from './';

export const TodoList = ({ container: { list: todos } }) => (
    <div>
        {todos.map(todo => (
            <TodoListItem text={todo.text} />
        ))}
    </div>
);

TodoList.propTypes = {
    container: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
            })
        )
    })
};

// TODO: yep this will change later
export default TodoList;