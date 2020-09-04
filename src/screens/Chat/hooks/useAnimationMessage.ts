import { Animated } from 'react-native';
import { useEffect } from 'react';

const useAnimationMessage = () => {
  const slideLeft = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(slideLeft,{
      useNativeDriver : true,
      toValue : 1,
      duration: 550
    }).start();
  },[]);

  const styles = {
    opacity : slideLeft,
    transform : [
      {
        translateX : slideLeft.interpolate({
          inputRange : [0,1],
          outputRange : [-15,0]
        })
      }
    ]
  }

  return styles;
}

export default useAnimationMessage;