namespace ChatController {
  export interface IStore {
    messages : IMessage[];
    isLoadingMessages : boolean;
  }

  export interface IMessage {
    id : string;
    content : string;
    createDate : string;
  }
}

export default ChatController;