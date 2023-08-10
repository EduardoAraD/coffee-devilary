import { useEffect, useState } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {
  Canvas,
  Path,
  runTiming,
  useValue
} from "@shopify/react-native-skia";
import { useTheme } from "styled-components/native";

type Props = {
  path: string;
  status: 'reset' | 'active';
  position: {
    start: number;
    end: number;
  }
}

export function PathSmoke ({ path, status, position }: Props) {
  const { colors: { GRAY400 }} = useTheme();

  const opacityStart = useValue(0);
  const transitionY = useSharedValue(position.start);

  const animatedTransitionY = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: transitionY.value }
      ],
    }
  })

  useEffect(() => {
    const time = setTimeout(() => {
      if(status === 'active') {
        opacityStart.current = 1;
        runTiming(opacityStart, 0, { duration: 3000 });
        transitionY.value = withTiming(position.start, { duration: 3000, easing: Easing.linear });
      } else {
        opacityStart.current = 0;
        transitionY.value = withTiming(position.end, { duration: 3000 });        
      }
    }, 3000);
    
    return () => clearTimeout(time);
  }, [status]);

  return (
    <Animated.View style={animatedTransitionY}>
      <Canvas style={[{
        height: 137,
        width: 64,
        zIndex: 1,
      }]}
      >
        <Path
          opacity={opacityStart}
          color={GRAY400}
          path={path}
        />
      </Canvas>
    </Animated.View>
  )
}
