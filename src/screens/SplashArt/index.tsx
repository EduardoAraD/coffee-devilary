import Animated, {
  Keyframe,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

import { Container } from "./styles";
import Logo from '../../assets/logo.svg';

export function SplashArt() {
  const widthAnimeted = useSharedValue(44);

  const enteringKeyframe = new Keyframe({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    }
  })

  const styledAnimated = useAnimatedStyle(() => {
    return {
      width: widthAnimeted.value,
    }
  })

  function animatedWidth() {
    return widthAnimeted.value = withTiming(156, { duration: 1000 });
  }

  return (
    <Container>
      <Animated.View
        style={[{ overflow: "hidden" }, styledAnimated]}
        entering={enteringKeyframe.duration(700).withCallback((finish) => {
          'worklet'
          if(finish) {
            runOnJS(animatedWidth)();
          }
        })}
      >
        <Logo />
      </Animated.View>
    </Container>
  )
}
