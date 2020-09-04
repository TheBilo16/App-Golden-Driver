namespace ChatController {
  type MessageType = 'file' | 'text';

  export interface IStore {
    messages : IMessage[];
    isLoadingMessages : boolean;
  }

  export interface IMessage {
    id : string;
    type : MessageType;
    content : string;
    createDate : string;
  }
}

export default ChatController;