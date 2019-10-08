import { Animated, Easing } from 'react-native';
export const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      let { routeName } = sceneProps.scene.route
      if(routeName === 'CheckOut' || routeName === 'Home') 
        return screenInterpolatorCheckOut(sceneProps)
      else
        return screenInterpolator(sceneProps)
    },
  }
}

const screenInterpolator = sceneProps => {
  const { layout, position, scene } = sceneProps
  const thisSceneIndex = scene.index
  const width = layout.initWidth

  const translateX = position.interpolate({
    inputRange: [thisSceneIndex - 1, thisSceneIndex],
    outputRange: [width, 0],
  })
  return { transform: [{ translateX }] }
}


const screenInterpolatorCheckOut = (sceneProps) => {
  const { layout, position, scene } = sceneProps
  const {index} = scene
  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1],
  });
  return { opacity, transform: [{ translateY }] };
}

