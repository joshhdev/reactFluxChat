/**
 * Created by yashw on 18-03-2017.
 */


import React from 'react'
import chatActions from '../actions/chatActions.js'

class ChatInput extends React.Component {
    constructor() {
        super();
        this.state={message:""};

        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(e)  {
        this.setState({message:e.target.value}) ;
    }

    handleClick() {
        // let message = this.props.userId + this.state.message + " " +new Date().toLocaleTimeString();
        // this.props.addMessage(message);
        // this.setState({message:""});
        chatActions.sendMessage(this.state.message,this.props.userId);
        this.setState({
          message: ''
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.message} onChange={this.handleChange.bind(this)} />

                <button onClick={this.handleClick}>Send Message</button>

            </div>
        );
    }
}

export default ChatInput;
