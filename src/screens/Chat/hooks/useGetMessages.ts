import { useEffect } from "react";
import { useSelector , useDispatch , shallowEqual } from 'react-redux';
import { getAllChatMessages } from "../../../redux/actions/ChatActions";

//Provicional
import ChatController from "../../../redux/reducers/Chat/metadata";

const provicionalData : ChatController.IMessage[] = [
  { 
    id : '123213da21233asd',
    content : 'Hola que tal que haciendo',
    createDate : '25 de Diciembre'
  },
  {
    id : 'iPekBhbCW20Frhrl9WGO',
    content : 'Bien y tu Bien y tu Bien y tu Bien y tuBien y tu Bien y tu Bien y tu Bien y tu Bien y tu',
    createDate : '26 de Diciembre'
  }
]

const useGetMessages = () => {
  const dispatch = useDispatch();
  const { messages , isLoadingMessages } = useSelector(({ chat }) => chat, shallowEqual);

  useEffect(() => {
    dispatch(getAllChatMessages(provicionalData));
  },[]);

  return {
    messages,
    isLoadingMessages
  }
}

export default useGetMessages;