import React from 'react';
import {Component} from 'react';

export default class User extends Component {
    render(){
        const {link, name, avatar} = this.props
    }
    return(
        <a href={link} target="_blank">
            <img src={avatar} alt={avatar}/>
            <div>{name}</div>
        </a>
    )
}