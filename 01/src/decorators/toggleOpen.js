import React, { Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false,
        commentOpen: false
    };

    render(){
        return(
            <OriginalComponent {...this.props}
                               {...this.state}
                               toggleOpen={this.toggleOpen}
                               commentHandleOpen={this.commentHandleOpen}
            />
            )
    }

    toggleOpen = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    commentHandleOpen = (e) => {
        e.preventDefault();
        this.setState({
            commentOpen: !this.state.commentOpen
        })
    }
}
