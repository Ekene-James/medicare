import React from 'react'

import { ChatContext } from '../../store/chats/ChatStore';
import { clearChat, newChat,updateMsg, getConversations } from '../../store/actions/ChatActions';
import { AuthContext } from '../../store/auth/AuthStore';


function Chats() {
    const socket = React.useRef();
    const {state,dispatch} = React.useContext(AuthContext);
    const chatCtx = React.useContext(ChatContext);
  

    React.useEffect(() => {
      chatCtx.dispatch(getConversations(chatCtx.dispatch)) 

      }, []);

    return (
        <div>
            chats Home
        </div>
    )
}

export default Chats
