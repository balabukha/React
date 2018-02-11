import React from 'react';
import { Component } from 'react';

import {connect} from 'react-redux';

export default class FilterLink extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {title} = this.props;
        return (
            <p>{title}</p>

        )
    }
}