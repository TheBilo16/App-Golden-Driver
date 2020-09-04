import { useEffect } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useFadeInAnimation = (delayFactory : number) => {
  const navigation = useNavigation();

  //Animation
  const fadeIn = new Animated.Value(0);
  const animationFadeIn = Animated.timing(fadeIn,{
    toValue : 1,
    duration : 500,
    delay : delayFactory * 100,
    useNativeDriver : true
  })

  useEffect(() => {
    animationFadeIn.start();

    navigation.addListener('blur', () => animationFadeIn.reset());
    navigation.addListener('focus', () => animationFadeIn.start());
  },[]);

  const styles = {
    opacity : fadeIn,
    transform : [
      {
        translateX : fadeIn.interpolate({
          inputRange : [0,1],
          outputRange : [30,0]
        })
      }
    ]
  }

  return styles;
}

export default useFadeInAnimation;