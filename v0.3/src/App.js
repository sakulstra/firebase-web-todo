import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Error404, Home, Todo } from './ui/pages';
import DevTools from 'mobx-react-devtools';
import './api/startup';

const App = () => (
    <BrowserRouter>
        <div>
            <DevTools />
            <Match exactly pattern="/" component={Home}/>
            <Match pattern="/todo" component={Todo}/>
            <Miss component={Error404}/>
        </div>
    </BrowserRouter>
);

export default App;
