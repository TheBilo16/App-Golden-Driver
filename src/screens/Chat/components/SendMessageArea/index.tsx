import React from 'react';
import { EvilIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import SMAS from './styles';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import useSendMessage from '../../hooks/useSendMessage';

const SendMessageArea = () => {
  const { sendMessage , changeInputContent , inputContent , openCamera } = useSendMessage();

  return <SMAS.Container>
    <SMAS.ContainerElements>
      <SMAS.ContainerMessageAction>
        <SMAS.ContainerIcon>
          <TouchableOpacity onPress={openCamera} >
            <EvilIcons name="image" size={28} color="black" />
          </TouchableOpacity>
        </SMAS.ContainerIcon>
        <SMAS.ContainerInput>
          <SMAS.InputMessage 
            defaultValue={inputContent}
            onChangeText={changeInputContent} 
            placeholder='Escribe un mensaje...' 
          />
        </SMAS.ContainerInput>
      </SMAS.ContainerMessageAction>
      <SMAS.ContainerMessageSend as={TouchableHighlight} underlayColor='#1D4ABC' onPress={sendMessage}>
        <MaterialCommunityIcons name="send" size={20} color="#fff" />
      </SMAS.ContainerMessageSend>
    </SMAS.ContainerElements>
  </SMAS.Container>;
}

export default SendMessageArea;