import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

import toggleOpen from '../decorators/toggleOpen';


class CommentsList extends Component {
     constructor(props) {
         super(props);
         // this.state = {
         //     isOpen: false
         // }
     }

    static propTypes ={
        comments: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
        )
    };
     render() {
         let {comments, commentHandleOpen, commentOpen} = this.props;

         let commentsElems = comments.map((comment) => {
             return (
                 <li key={comment.id}>
                     <p>{comment.text}</p>
                     <p><b>{comment.user}</b></p>
                 </li>)
         });

         return (
             <div>
                 <button onClick={commentHandleOpen}>open comments</button>
                 <ul>{ commentOpen ? commentsElems : null}</ul>
             </div>
         )
     }

     // commentHandleOpen(e){
     //     e.preventDefault();
     //     this.setState({
     //         isOpen: !this.state.isOpen
     //     })
     // }

 }

export default toggleOpen(CommentsList);
