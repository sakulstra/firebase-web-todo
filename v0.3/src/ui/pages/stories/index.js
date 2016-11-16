import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Todo, Home, Error404 } from '../';

storiesOf('Pages', module)
    .add('Home', () => (
        <Home />
    ))
    .add('Todo', () => (
        <Todo />
    ))
    .add('404', () => (
        <Error404/>
    ));
