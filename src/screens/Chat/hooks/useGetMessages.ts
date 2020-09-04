import { useEffect } from "react";
import { useSelector , useDispatch , shallowEqual } from 'react-redux';
import { getAllChatMessages } from "../../../redux/actions/ChatActions";

//Provicional
import ChatController from "../../../redux/reducers/Chat/metadata";

const provicionalData : ChatController.IMessage[] = [
  { 
    id : '123213da21233asd',
    type : 'text',
    content : 'Hola que tal que haciendo',
    createDate : '25 de Diciembre'
  },
  {
    id : 'iPekBhbCW20Frhrl9WGO',
    type : 'text',
    content : 'Bien y tu Bien y tu Bien y tu Bien y tuBien y tu Bien y tu Bien y tu Bien y tu Bien y tu',
    createDate : '26 de Diciembre'
  },
  {
    id : 'iPekBhbCW20Frhrl9WGO',
    type : 'file',
    content : 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_680,h_350/https://imagenesderopaparaperros.com/wp-content/uploads/2020/01/rottweiler-680x350.jpg',
    createDate : '26 de Diciembre'
  },
  {
    id : 'iPekBhbCW20',
    type : 'file',
    content : 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_680,h_350/https://imagenesderopaparaperros.com/wp-content/uploads/2020/01/rottweiler-680x350.jpg',
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