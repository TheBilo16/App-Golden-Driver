import { ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { createRef, useState } from "react";

const useScrollViewBottom = () => {
  const [ currentScroll , setCurrentScroll ] = useState<number>(0);
  const scrollRef = createRef<ScrollView>();

  const scrollToScreen = (ev : NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(ev.nativeEvent.contentOffset.y);
  }

  const resizeScrolLView = (width : number, height : number) => {
    //if(currentScroll === height){
      scrollRef.current?.scrollToEnd();
    //}
  }

  return {
    scrollRef,
    scrollToScreen,
    resizeScrolLView
  }
}

export default useScrollViewBottom;