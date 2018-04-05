import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import { fetchUsers, selectLanguage } from '../AC/index';

// import UserList from '../components/UserList.jsx';
import UserList from '../components/UserList.jsx';
import Picker from '../components/Picker.jsx';

const LANGUAGES = [
    'javascript',
    'python',
    'php'
];


class App extends Component {

    componentDidMount(){
        this.props.fetchUsers(this.props.language)
    }

    componentWillReceiveProps(nextProps){
        if (this.props.language !== nextProps.language){
            this.props.fetchUsers(nextProps.language)
        }
    }


    render(){
        const {users, isFetching, language} = this.props;

        return (
            <div>
                <Picker
                    options = {LANGUAGES}
                    onChange = {(language) => this.props.selectLanguage(language)}
                    value={language}
                />

                {
                    isFetching ? 'Loading...' : <UserList users={users} />
                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users.items,
        isFetching: state.users.isFetching,
        language: state.languageSelect
    }
}


// const mapToDispatch = {
//     // dispatchIncrement: increment
//     // increment: increment
// };

export default connect(mapStateToProps, {fetchUsers, selectLanguage} )(App)