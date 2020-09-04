import React, { memo } from 'react';
import MLS from './styles';
import { ScrollView } from 'react-native';

//Hooks
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message';

const MessageList = () => {
  const { isLoadingMessages , messages } = useGetMessages();

  const idChofer = 'iPekBhbCW20Frhrl9WGO';

  return <MLS.Container as={ScrollView}>
    {
      messages.map((v,i) => {
        return <Message.Basic key={i} content={v.content} isChofer={v.id === idChofer} />
      })
    }
  </MLS.Container>
}

export default memo(MessageList);