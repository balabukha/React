import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import {toggleTodo} from '../AC'


function TodosComponent(props){

    // isCompleted = (id) => {
    //     console.log('--', id);
    // };

    return(
        <ul>
            {props.todos.map(todo => {
            return <li 
                key={todo.id}
                onClick={()=>(props.toggleTodo(todo.id))}
                >
                <Todo
                    todo={todo}
                    completed={todo.completed}/>
            </li>
            })}
        </ul>
    )


}

const mapToDispatch = {
    toggleTodo: toggleTodo
};

export default connect(state=>({todos: state.addingTodo}), mapToDispatch)(TodosComponent)

