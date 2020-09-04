namespace NSAlertBox {
  interface IProps {
    title : string;
    message : string;
  }

  export interface IPropsQuestion extends IProps {
    buttonsText? : [string,string];
    onPressSuccess?() : void,
    onPressCancel?() : void,
  }

  export interface IPropsMessage extends IProps {
    buttonText? : string,
    onPress?() : void
  }
}

export default NSAlertBox;