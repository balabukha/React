import React from 'react';
import {Link} from 'react-router';


const ToLogin = () => {

    return(
        <div className="wrapper link">

            <h1>LOGIN PLEASE</h1>
                <Link
                    className="link"
                    to="/"
                >
                    Admin panel
                </Link>
        </div>
    )
};

export default ToLogin