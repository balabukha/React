import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import {increment} from '../AC/index';



class App extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
    handleIncrement = () => {
        console.log('incrementing');
        // this.props.dispatchIncrement()
        this.props.increment()
    };
};

function mapStateToProps(state) {
    return {counter: state.count}
}

const mapToDispatch = {
    // dispatchIncrement: increment
    increment: increment
};

export default connect(mapStateToProps, mapToDispatch )(App)