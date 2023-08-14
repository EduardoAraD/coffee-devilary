import { TouchableOpacityProps } from 'react-native';

import { Price } from '../Price';

import { Coffee } from '../../Model/Coffee';

import { moneyMask } from "../../utils/mask";

import {
  Description,
  Image,
  Info,
  Title,
  Touch
} from './styles';

type Props = TouchableOpacityProps & {
  coffee: Coffee;
}

export function CardTouchCoffee({ coffee: { description, image, name, price }, ...rest }: Props) {
  return (
    <Touch activeOpacity={0.8} {...rest}>
      <Image source={image} />
      <Info>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price price={moneyMask(price)} />
      </Info>
    </Touch>
  )
}
