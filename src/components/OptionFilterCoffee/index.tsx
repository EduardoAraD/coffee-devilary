import { useEffect } from "react";
import { TouchableOpacityProps } from "react-native"
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";

import { MarketCoffee } from "../../Model/MarkedCoffee"

import { Container, Text } from "./styles"

type Props = TouchableOpacityProps & {
  marked: MarketCoffee;
  active?: boolean;
}

const TouchAnimated = Animated.createAnimatedComponent(Container);
const TextAnimated = Animated.createAnimatedComponent(Text);

export function OptionFilterCoffee ({ marked, active = false, ...rest }: Props) {
  const { colors: { PURPLE_DARK, WHITE } } = useTheme();
  const checked = useSharedValue(0);

  const animatedTouch = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        ['transparent', PURPLE_DARK], 
      )
    }
  })

  const animatedText = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [PURPLE_DARK, WHITE], 
      )
    }
  })

  useEffect(() => {
    checked.value = withTiming(active ? 1 : 0);
  }, [active]);

  return (
    <TouchAnimated style={animatedTouch} {...rest}>
      <TextAnimated style={animatedText}>{marked}</TextAnimated>
    </TouchAnimated>
  )
}
