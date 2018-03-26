import React from 'react';
import {Link} from 'react-router';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

const style = {
    display: 'inline-block',
    height: '100vh',
};
const button = {
    fontSize: 16,
    padding: '0 30px'

};

const NavBar = () => {
    return(
        <Paper style={style}>
            <Menu className={button}>
                <Link
                    to='/admin/info'>
                    <MenuItem primaryText="Info" leftIcon={<RemoveRedEye />} />
                </Link>
                <Link to="/admin/clients" >
                    <MenuItem primaryText="Clients" leftIcon={<RemoveRedEye />} />
                </Link>
            </Menu>
        </Paper>
    )
};

export default NavBar;