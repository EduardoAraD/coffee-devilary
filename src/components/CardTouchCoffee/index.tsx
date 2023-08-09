import { Price } from '../Price';

import { Coffee } from '../../Model/Coffee';

import { Description, Image, Info, Title, Touch } from './styles';
import CoffeePng from '../../assets/coffee1.png';

type Props = {
  coffee: Coffee;
}

export function CardTouchCoffee({ coffee: { description, image, name, price } }: Props) {
  return (
    <Touch activeOpacity={0.8}>
      <Image source={image} />
      <Info>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price price={price} />
      </Info>
    </Touch>
  )
}
