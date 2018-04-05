import React from 'react';
import {Component} from 'react';

export default class User extends Component {
    render(){
        const {link, name, avatar} = this.props
        return(
            <div className="user">
                <a
                    href={link}
                    target="_blank"
                    className="">
                    <img
                        src={avatar}
                        alt={avatar}
                    />
                    <p>{name}</p>

                </a>
            </div>
    )
    }

}