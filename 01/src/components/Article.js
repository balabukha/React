import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import moment from 'moment';

import CommentsList from './CommentsList'
import toggleOpen from '../decorators/toggleOpen';

import { deleteArticle } from '../AC/index'

class Article extends Component{
    constructor(props){
        super(props);

        // this.state = {
        //     isOpen: false,
        // }
    };

    static propTypes ={
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool
    };

    componentWillReceiveProps(nextProps){
        // console.log('componentWillReceiveProps', 'this.props.isOpen', this.props.isOpen, nextProps.isOpen );
        // console.log('this.props.isOpen_01',this.props.isOpen);

    };

    componentWillMount(){
        // console.log('this.props.isOpen_02',this.props.isOpen);
        // console.log('componentWillMount','componentWillMount');
    };

    render(){


        const {article, toggleOpen, isOpen} = this.props;

        // let date = moment.utc(article.date);
        // let date2 = new Date(article.date).toLocaleDateString();
        // console.log('--', date);
        // console.log('--', date2);
        return (
            <div>
                <h3>{article.title}</h3>
                <p>{new Date(article.date).toLocaleDateString()}</p>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={this.handleDelete}>DELETE</button>
                {this.getBody()}
            </div>
        )

    }

    componentDidMount(){
        // console.log('this.props.isOpen_03',this.props.isOpen);
        // console.log('componentDidMount','componentDidMount');
    };

    componentDidUpdate(){
        // console.log('this.props.isOpen_04',this.props.isOpen);
        // console.log('componentDidUpdate','componentDidUpdate');
    };

    // handleClick(e){
    //     e.preventDefault();
    //     console.log('handleClick', this);
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //     })
    // }
    handleDelete = () => {
        const {article, deleteArticle} = this.props;
        deleteArticle(article.id);
    };

    getBody(){
        const {article, toggleOpen, isOpen} = this.props;
        // let commentElements = article.comments.map((comment) => {
        //     return <li>{comment.text}</li>
        // });

        // console.log('getBody', this.state.isOpen);
        if ( !isOpen ) return null;
        return (
            <div>
                <section>{article.text}</section>
                { Array.isArray(article.comments) ? <CommentsList ref={this.articleRef} comments={article.comments}/> : null}
            </div>)
    }

    articleRef = (ref) => {
        this.container = ref;
        // console.log('ref',ref);
        // console.log('this.container',this.container);
    }
}

// export default toggleOpen(Article);
export default connect(null, { deleteArticle })(Article);

