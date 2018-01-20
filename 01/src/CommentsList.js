import React from 'react';
import {Component} from 'react';


 export default class CommentsList extends Component {
     constructor(props) {
         super(props);
         this.state = {
             isOpen: false
         }
     }

     render() {
         let {comments} = this.props;

         let commentsElems = comments.map((comment) => {
             return (
                 <li key={comment.id}>
                     <p>{comment.text}</p>
                     <p><b>{comment.user}</b></p>
                 </li>)
         });
         // console.log('comments',this);

         return (
             <div>
                 <button onClick={this.handleClick.bind(this)}>open comments</button>
                 <ul>{ this.state.isOpen ? commentsElems : null}</ul>
             </div>
         )
     }

     handleClick(e){
         e.preventDefault();
         this.setState({
             isOpen: !this.state.isOpen
         })
     }

 }