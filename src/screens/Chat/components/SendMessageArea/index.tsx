import React from 'react';
import { EvilIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import SMAS from './styles';
import { TouchableOpacity } from 'react-native';

const SendMessageArea = () => {
  return <SMAS.Container>
    <SMAS.ContainerElements>
      <SMAS.ContainerMessageAction>
        <SMAS.ContainerIcon>
          <TouchableOpacity>
            <EvilIcons name="image" size={28} color="black" />
          </TouchableOpacity>
        </SMAS.ContainerIcon>
        <SMAS.ContainerInput>
          <SMAS.InputMessage placeholder='Escribe un mensaje...' />
        </SMAS.ContainerInput>
      </SMAS.ContainerMessageAction>
      <SMAS.ContainerMessageSend as={TouchableOpacity}>
        <MaterialCommunityIcons name="send" size={20} color="#fff" />
      </SMAS.ContainerMessageSend>
    </SMAS.ContainerElements>
  </SMAS.Container>;
}

export default SendMessageArea;