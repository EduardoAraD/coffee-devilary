import { PressableProps } from "react-native";
import { Container, Text } from "./styles";

type Props = PressableProps & {
  title: string;
}

export function ButtonOption({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  )
}
