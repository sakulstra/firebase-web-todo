import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { TodoList, TodoListItem } from '../';

const container = {
    list: [
        {text: 'sometext'},
        {text: 'someothertext'},
        {text: 'oh, it#s a text'}
    ]
};
storiesOf('Components', module)
    .add('TodoList', () => (
        <TodoList container={container} />
    ))
    .add('TodoListItem', () => (
        <TodoListItem text="sometext" />
    ));
