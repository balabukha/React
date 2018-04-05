import React from 'react';
import {Component} from 'react';

import User from './User.jsx';


class UserList extends Component {
    render(){
        const {users} = this.props;
        console.log('users_UserList', users);

        return(
            <div className="wrapper-user">
                {
                    users.map((user) =>
                    <User 
                        key = {user.owner.login}
                        name = {user.owner.login}
                        avatar = {user.owner.avatar_url}
                        link = {user.owner.url}
                    />
                    )
                }
            </div>
        )
    }
};

export default UserList;