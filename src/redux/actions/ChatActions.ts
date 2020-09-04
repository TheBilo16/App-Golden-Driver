import ChatController from "../reducers/Chat/metadata"

const TYPES = {
  GET_ALL_CHAT_MESSAGES : 'get-chat-messages',
  SEND_MY_MESSAGE : 'send-my-message'
}

const getAllChatMessages = (messages : ChatController.IMessage[]) => ({
  type : TYPES.GET_ALL_CHAT_MESSAGES,
  payload : messages
})

const sendMyMessage = (message : ChatController.IMessage) => ({
  type : TYPES.SEND_MY_MESSAGE,
  payload : message
})

export {
  getAllChatMessages,
  sendMyMessage
}

export default TYPES;