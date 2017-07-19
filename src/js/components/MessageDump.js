/**
 * Created by yashw on 30-03-2017.
 */
import React from 'react';
import chatStores from '../stores/chatStores.js'

class MessageDump extends React.Component{

constructor(){
  super();
  this.state = ({
    msgLog: []
  });
}

componentDidMount(){
  this.storeSubscription = chatStores.addListener(()=> this.handleStoreChange());
}

componenetWillUnmount(){
  this.storeSubscription.remove();
}



handleStoreChange(){
  this.setState({
    msgLog: chatStores.getMsg()
  })
}
    render(){
        return(
            <ul>
                {this.state.msgLog.map((msg,index)=><li key={index}>{msg}</li>)}
            </ul>
        );
    }
}

export default MessageDump;
