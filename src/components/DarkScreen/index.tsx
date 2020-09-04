import React , { FC, useEffect } from "react";
import { Container } from "./styles";
import { Animated, View } from "react-native";

const ContainerAnimatable = Animated.createAnimatedComponent(Container);

const DarkScreen : FC = ({children}) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue : 1,
      duration : 300,
      useNativeDriver : true
    }).start();
  },[]);

  return <ContainerAnimatable style={{ opacity }} >
    {children}
  </ContainerAnimatable>
}

export default DarkScreen;