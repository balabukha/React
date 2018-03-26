import React from 'react';
import {Link} from 'react-router';

const NotFound = () => {
    return(
        <div className="wrapper link">

            <h1>PAGE NOT FOUND</h1>
            <Link
                className="link"
                to="/"
            >
                Admin panel
            </Link>
        </div>
    )
};

export default NotFound