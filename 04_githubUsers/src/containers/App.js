import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import { fetchUsers } from '../AC/index';



class App extends Component {

    componentDidMount(){
        this.props.fetchUsers('javascript')
    }
    render(){
        return (
            <h1>HEY!</h1>
        )
    }

}

// function mapStateToProps(state) {
//     // return {counter: state.count}
// }


// const mapToDispatch = {
//     // dispatchIncrement: increment
//     // increment: increment
// };

export default connect(null, {fetchUsers} )(App)