import { ViewProps } from "react-native";
import { Container, RS, Text } from "./styles";

type Props = ViewProps & {
  price: string;
}

export function Price ({ price, ...rest }: Props) {
  return (
    <Container {...rest}>
      <RS>R$</RS>
      <Text>{price}</Text>
    </Container>
  )
}
