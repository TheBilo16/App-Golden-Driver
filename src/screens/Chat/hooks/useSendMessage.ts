import { useState, createRef } from "react";
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
        type : 'text',
        content : inputContent,
        createDate : String(new Date().getTime())
      }

      dispatch(sendMyMessage(message));
      setInputContent(() => '');
    }
  }

  const openCamera = () => console.log('Open Camera...');

  return {
    sendMessage,
    inputContent,
    changeInputContent,
    openCamera
  }
}

export default useSendMessage;