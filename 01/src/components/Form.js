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
            <form>
                User: <input onChange={this.handleChangeInputUser}
                        value={this.state.user}
                    />
                Text: <input onChange={this.handleChangeInputText}
                             value={this.state.text}/>
                <button onClick={this.handleSubmit}>SEND DATA</button>
            </form>
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
