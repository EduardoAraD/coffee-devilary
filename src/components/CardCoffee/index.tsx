import { Image, ViewProps } from "react-native";

import { Coffee } from "../../Model/Coffee";
import { Price } from "../Price";

import {
  Container,
  Subtitle,
  TextMarked,
  Title,
  ViewMarked,
} from "./styles";

type Props = ViewProps & Coffee;

export function CardCoffee({
  image,
  marked,
  price,
  name,
  description,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Image
        source={image}
        style={{
          marginTop: -52,
          height: 120,
          width: 120
        }}
      />
      <ViewMarked>
        <TextMarked>{marked}</TextMarked>
      </ViewMarked>
      <Title>{name}</Title>
      <Subtitle>{description}</Subtitle>
      <Price price={price} />
    </Container>
  )
}
