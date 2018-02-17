import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

// import { } from '../AC/index';



class App extends Component {
    render(){
        return (

        )
    }

}

function mapStateToProps(state) {
    // return {counter: state.count}
}


const mapToDispatch = {
    // dispatchIncrement: increment
    // increment: increment
};

export default connect(mapStateToProps, mapToDispatch )(App)