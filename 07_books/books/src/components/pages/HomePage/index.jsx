import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOut } from '../../../actions'

const HomePage = ({isAuth, logOut}) => (
        <div>
            <h1>Home Page</h1>

            {
                isAuth ? 
                ( <button onClick={()=>logOut()}>Logout</button> ) :
                ( <div><Link to='./login'>Login</Link> or <Link to='./sugnup'>Signup</Link></div>  )
            }

        </div>
);

function mapStateToProps(state) {
    return {
        isAuth: !!state.user.token
    }
}

HomePage.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {logOut})(HomePage);