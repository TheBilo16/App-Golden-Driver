import { Dimensions } from 'react-native'
const { width , height } = Dimensions.get("screen");

const headerMenuMeasure = {
  height : 60,
  paddingTop : 24
}

const alertBoxMeasure = {
  containerWidth : 280,
  containerHeight : 180
}

const alertBoxPosition = {
  top : (height / 2) - (alertBoxMeasure.containerHeight / 2),
  left : (width / 2) - (alertBoxMeasure.containerWidth / 2)
}

export {
  alertBoxMeasure,
  alertBoxPosition,
  headerMenuMeasure
}