import React from 'react';
import { Link } from 'react-router';

const Error404 = () => (
    <div>
        <Link to="/">Back to home</Link>
        <p>I'm your awesome 404 error</p>
    </div>
);

export default Error404;