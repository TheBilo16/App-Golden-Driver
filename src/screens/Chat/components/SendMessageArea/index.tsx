import React from 'react';
import { EvilIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import SMAS from './styles';
import { TouchableOpacity } from 'react-native';
import useSendMessage from '../../hooks/useSendMessage';

const SendMessageArea = () => {
  const { sendMessage , changeInputContent } = useSendMessage();

  return <SMAS.Container>
    <SMAS.ContainerElements>
      <SMAS.ContainerMessageAction>
        <SMAS.ContainerIcon>
          <TouchableOpacity>
            <EvilIcons name="image" size={28} color="black" />
          </TouchableOpacity>
        </SMAS.ContainerIcon>
        <SMAS.ContainerInput>
          <SMAS.InputMessage onChangeText={changeInputContent} placeholder='Escribe un mensaje...' />
        </SMAS.ContainerInput>
      </SMAS.ContainerMessageAction>
      <SMAS.ContainerMessageSend as={TouchableOpacity} onPress={sendMessage}>
        <MaterialCommunityIcons name="send" size={20} color="#fff" />
      </SMAS.ContainerMessageSend>
    </SMAS.ContainerElements>
  </SMAS.Container>;
}

export default SendMessageArea;