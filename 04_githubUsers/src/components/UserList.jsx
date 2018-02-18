import React from 'react';
import {Component} from 'react';

import User from './User';


export default class UserList extends Component {
    render(){
        const {users} = this.props

        return(
            <div>
                {
                    users.map(user => 
                    <User 
                        key = {user.login}
                        name = {user.login}
                        avatar = {user.avatar_url}
                        link = {user.url}
                    />
                    )
                }
            </div>
        )
    }
}