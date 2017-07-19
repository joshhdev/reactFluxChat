import chatDispatcher from '../dispatcher/chatDispatcher';
import {EventEmitter} from 'fbemitter';
import chatConstants from '../constants/chatConstants';

let msgLog=[];
let __emitter = new EventEmitter();
var msgLine = '';

let chatStores = {
  getMsg(){
    return msgLog;
  },
  addListener(callback){
    return __emitter.addListener(chatConstants.CHANGE_EVENT, callback)
  }
};



chatStores._dispatchToken = chatDispatcher.register(
  (action)=>{
    switch (action.type) {
      case chatConstants.SENT_MESSAGE:
        msgLine = new Date().toLocaleTimeString() + '  ' + action.payload.user + '  ' + action.payload.msg;
        msgLog.push(msgLine);
        msgLine = "";
        __emitter.emit(chatConstants.CHANGE_EVENT);
        break;
        default:
    }
  }
)

export default chatStores;
