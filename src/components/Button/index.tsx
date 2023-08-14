import { TouchableOpacityProps } from "react-native";

import { ColorStyleProps, Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  typeColor?: ColorStyleProps
}

export function Button({ title, typeColor = 'PRIMARY', ...rest }: Props) {
  return (
    <Container typeColor={typeColor} {...rest}>
      <Text>{title}</Text>
    </Container>
  )
}
