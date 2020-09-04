namespace NSChat {
  interface IPropsMessage {
    content : string;
    isChofer? : boolean;
  }

  export interface IPropsMessageBasic extends IPropsMessage {
    
  }

  export interface IPropsMessageImage extends IPropsMessageBasic {

  }
}

export default NSChat;