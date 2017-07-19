import chatConstants from '../constants/chatConstants.js';
import chatDispatcher from '../dispatcher/chatDispatcher.js'

 let ChatActions = {
   sendMessage(msg,user){
     chatDispatcher.dispatch({type: chatConstants.SENT_MESSAGE,
     payload: {
       msg: msg,
      user: user
      }
    })
  }
}

export default ChatActions;
    // receiveMessage(){
    //
    // }
