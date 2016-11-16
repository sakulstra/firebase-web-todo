import React from 'react';
import { Link } from 'react-router';

const Home = () => (
    <div>
        <p>I'm your awesome Home Page which links to the todo list</p>
        <Link to="/todo">TODO-List!</Link><br />
        <p>And to settings - which settings?!</p>
        <Link to="/settings">Settings</Link>
    </div>
);

export default Home;