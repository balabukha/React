import React from 'react';


export default function TodosComponent(props){
    const Completed = {
        color: 'green',
    };
    const noCompleted = {
        color: 'red',
    };

    return(
        <h5 style = {props.completed ? Completed : noCompleted}>{props.todo.title}</h5>
    )
}