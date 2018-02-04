import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';

function TodosComponent(props){
    return(
        <ul>
            {console.log('props.todos', props.todos.addTodo)}

            {props.todos.map(todo => {
            return <li key={todo.id}><Todo todo={todo}/></li>
            })}
        </ul>
    )
}

export default connect(state=>({todos: state.addTodo}))(TodosComponent)

