import React, { PropTypes } from 'react';
import _ from 'lodash';
import { TodoListItem } from './';
import { todosListContainer } from './../../api/firebase/todos';

export const TodoList = ({ container: { list : todos } }) => {
    return (
        <div>
            {todos ? todos.map(todo => (
                <TodoListItem text={todo.text} />
            )) : null}
        </div>
    );
}

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
export default todosListContainer(TodoList);