/**
 * Created by yashw on 18-03-2017.
 */


import React from 'react';
import ChatInput from './ChatInput';
import MessageDump from './MessageDump';

class App extends React.Component {

    constructor() {
        super();
        this.state={messages:[]}

        this.addMessage = this.addMessage.bind(this);
    }

    render() {
        return(
            <div>
                <label>Josh: <ChatInput userId="Josh: " addMessage={this.addMessage} /></label><br/>
                <label>Chris: <ChatInput userId="Chris: " addMessage={this.addMessage}/></label><br/>
                <div className="messagedump">
                    <MessageDump/>
                </div>
            </div>
        );
    }


    addMessage(msg) {
        let messages = this.state.messages.slice(0);
        messages.push(msg);
        this.setState({messages:messages});
        console.log(messages);
    }

}

export default App;
