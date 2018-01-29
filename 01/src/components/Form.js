import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: '',
            text: ''
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                User: <input onChange={this.handleChangeInputUser}
                        value={this.state.user}
                    />
                Text: <input onChange={this.handleChangeInputText}
                             value={this.state.text}/>
                <input value='SEND' type="submit"/>
            </form>
            </div>
        )
    }

    //func
    handleChangeInputUser = (e) => {
        this.setState({
            user: e.target.value
        })
    };

    handleChangeInputText = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit',this.state.user, this.state.text);

    }

}
