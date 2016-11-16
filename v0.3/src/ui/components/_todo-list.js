import React, { PropTypes } from 'react';
import { TodoListItem } from './';
import { todosListContainer } from './../../api/firebase/todos';

// export it as vanilla to allow easy testing in storybook
export const TodoList = ({ container: { list : todos } }) => {
    return (
        <div>
            {todos ? todos.map(todo => (
                <TodoListItem text={todo.text} />
            )) : null}
        </div>
    );
}

// yep defining props is a good practice
TodoList.propTypes = {
    container: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
            })
        )
    })
};

// wrap it with the container to retrieve the actual data
export default todosListContainer(TodoList);