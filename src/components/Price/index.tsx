import { ViewProps } from "react-native";
import { Container, RS, Text, TypeSize } from "./styles";

type Props = ViewProps & {
  price: string;
  size?: TypeSize
}

export function Price ({ price, size = 'md', ...rest }: Props) {
  return (
    <Container {...rest}>
      <RS size={size}>R$</RS>
      <Text size={size}>{price}</Text>
    </Container>
  )
}
