import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import { fetchUsers } from '../AC/index';



class App extends Component {

    componentDidMount(){
        this.props.fetchUsers('javascript')
    }
    render(){
        // console.log(users);
        return (
            <h1>HEY!</h1>
        )
    }

}

function mapStateToProps(state) {
    return {users: state.items}
}


// const mapToDispatch = {
//     // dispatchIncrement: increment
//     // increment: increment
// };

export default connect(mapStateToProps, {fetchUsers} )(App)