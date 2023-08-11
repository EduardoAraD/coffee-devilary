import { useCallback, useEffect } from "react";
import { Dimensions, PressableProps } from "react-native";
import {
  Canvas,
  Path,
  Skia,
  useValue,
  runTiming
} from "@shopify/react-native-skia";
import { useTheme } from "styled-components/native";

import { Container, Text } from "./styles";

type Props = PressableProps & {
  title: string;
  selected: boolean;
  isError: boolean;
}

const BUTTON_HEIGHT = 40;
const BUTTON_STROKE = 2;

export function ButtonOption({ title, selected, isError, ...rest }: Props) {
  const { colors: { RED, PURPLE }} = useTheme();
  const BUTTON_WIDTH = (Dimensions.get('window').width - (32 * 2) - (8 * 2)) / 3 - 1;

  const percentageRed = useValue(0);
  const percentagePurple = useValue(0);


  const path = Skia.Path.Make();
  path.addRRect({
    rect: { height: BUTTON_HEIGHT, width: BUTTON_WIDTH, x: 0, y: 0},
    rx: 6,
    ry: 6
  });

  const UpdateError = useCallback(() => {
    if(isError) {
      runTiming(percentageRed, 1, { duration: 700 });
    } else {
      runTiming(percentageRed, 0, { duration: 700 });
    }
  }, [isError])

  const UpdateSelected = useCallback(() => {
    if(selected) {
      runTiming(percentagePurple, 1, { duration: 700 });
    } else {
      runTiming(percentagePurple, 0, { duration: 700 });
    }
  }, [selected])

  useEffect(() => {
    UpdateError();
    UpdateSelected();
  }, [UpdateError, UpdateSelected]);

  return (
    <Container {...rest}>
      <Text selected={selected}>{title}</Text>
      <Canvas style={{ height: BUTTON_HEIGHT, width: '100%' }}>
        <Path
          path={path}
          color={RED}
          style="stroke"
          strokeWidth={BUTTON_STROKE}
          start={0}
          end={percentageRed}
        />
        <Path
          path={path}
          color={PURPLE}
          style="stroke"
          strokeWidth={BUTTON_STROKE}
          start={0}
          end={percentagePurple}
        />
      </Canvas>
    </Container>
  )
}
