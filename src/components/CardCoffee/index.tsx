import { Image, ViewProps } from "react-native";

import { Price } from "../Price";

import { Coffee } from "../../Model/Coffee";

import { moneyMask } from "../../utils/mask";

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
      <Title numberOfLines={1}>{name}</Title>
      <Subtitle numberOfLines={2}>{description}</Subtitle>
      <Price price={moneyMask(price)} />
    </Container>
  )
}
