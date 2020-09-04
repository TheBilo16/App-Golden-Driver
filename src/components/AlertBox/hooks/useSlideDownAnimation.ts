import { Animated } from 'react-native';
import { useEffect } from 'react';

const useSlideDownAnimation = (initialTop = -15) => { 
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation,{
      toValue : 1,
      duration : 400,
      useNativeDriver : true
    }).start();
  },[]);

  const styles = { 
    opacity : animation,
    transform : [
      {
        translateY : animation.interpolate({
          inputRange : [0,1],
          outputRange : [initialTop, 0]
        })
      }
    ]
  }

  return styles;
}

export default useSlideDownAnimation;