import React from 'react';


export default function TodosComponent(props){
    const Completed = {
        color: 'green',
    };
    const noCompleted = {
        color: 'red',
    };

    return(
        <p style = {props.completed ? Completed : noCompleted}>{props.todo.title}</p>
    )
}