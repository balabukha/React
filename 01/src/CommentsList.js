import React from 'react';

export default function CommentsList({comments}){
    console.log('CommentsList',comments);
    const commentsElems = comments.map((comment) => {
        return (<li key={comment.id}>
            <p>{comment.text}</p>
            <p><b>{comment.user}</b></p>
        </li>)
    });
    return (
    <ul>{commentsElems}</ul>

    )
}