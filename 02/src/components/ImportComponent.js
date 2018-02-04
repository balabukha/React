import React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';

import {ENTER_KEY} from '../constants';

import {addTodo} from '../AC'

class ImportComponent extends Component{

    state = {
        value: '',
    };
    

    render(){
        return(
            <input
                type="text"
                placeholder='Enter text here'
                value = {this.state.value}
                onChange = {this.handleChange}
                onKeyDown={this.keyDown}
            />
        )
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
        console.log('Changing' ,this.state.value);
    };

    keyDown = (e) => {
        if (e.keyCode === +ENTER_KEY){
            console.log('added',this.state.value);
            this.props.addTodo(this.state.value);
            // store.dispatch({
            //     type:'ADD_TODO',
            // })
        }
    }
};


const mapToDispatch = {
    // dispatchIncrement: increment
    addTodo: addTodo
};

export default connect(state=>({todos: state.addingTodo}), mapToDispatch )(ImportComponent)






