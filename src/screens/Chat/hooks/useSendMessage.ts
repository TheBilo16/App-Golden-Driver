import { useState } from "react";
import { useDispatch } from 'react-redux';
import { sendMyMessage } from "../../../redux/actions/ChatActions";
import ChatController from "../../../redux/reducers/Chat/metadata";

const idChofer = 'iPekBhbCW20Frhrl9WGO'; //Store test

const useSendMessage = () => {
  const dispatch = useDispatch();
  const [ inputContent , setInputContent ] = useState<string>('');

  const changeInputContent = (text : string) => setInputContent(() => text);

  const sendMessage = () => {
    if(inputContent){
      const message : ChatController.IMessage = {
        id : idChofer,
        content : inputContent,
        createDate : new Date().getTime() + ''
      }

      dispatch(sendMyMessage(message));
    }
  }

  return {
    sendMessage,
    changeInputContent
  }
}

export default useSendMessage;