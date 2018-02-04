import {combineReducers} from 'redux';

import count from './counter';

export default combineReducers({
    count // обязательно что бы совпадало наименование здесь и в mapStateToProps
})