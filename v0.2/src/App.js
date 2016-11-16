import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Error404, Home, Todo } from './ui/pages';

const App = () => (
    <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={Home}/>
            <Match pattern="/todo" component={Todo}/>
            <Miss component={Error404}/>
        </div>
    </BrowserRouter>
);

export default App;
