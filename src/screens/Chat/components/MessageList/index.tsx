import React, { memo, createRef } from 'react';
import MLS from './styles';
import { ScrollView } from 'react-native';

//Hooks
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message';
import useScrollViewBottom from '../../hooks/useScrollViewBottom';

const MessageList = () => {
  const { isLoadingMessages , messages } = useGetMessages();
  const { resizeScrolLView , scrollRef , scrollToScreen } = useScrollViewBottom();
  const idChofer = 'iPekBhbCW20Frhrl9WGO';

  return <MLS.Container>
    <ScrollView ref={scrollRef} onScroll={scrollToScreen} onContentSizeChange={resizeScrolLView}>
      {
        messages.map((v,i) => v.type === 'file' ?
          <Message.Image key={i} content={v.content} isChofer={v.id === idChofer} /> : 
          <Message.Basic key={i} content={v.content} isChofer={v.id === idChofer} />
        )
      }
    </ScrollView>
  </MLS.Container>
}

export default memo(MessageList);