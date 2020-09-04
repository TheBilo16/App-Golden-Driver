namespace NSChat {
  type FileUrl = string;

  interface IPropsMessage {
    isChofer? : boolean;
  }

  export interface IPropsMessageBasic extends IPropsMessage {
    content : string;
  }

  export interface IPropsMessageImage extends IPropsMessageBasic {
    content : FileUrl;
  }
}

export default NSChat;