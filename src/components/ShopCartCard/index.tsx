import { View } from 'react-native'

import { ShopCartComplete } from '../../Model/ShopCart';

import { moneyMask } from '../../utils/mask';

import {
  Actions,
  Container,
  IconMinus,
  IconPlus,
  Image,
  Info,
  Ml,
  Price,
  TextQtd,
  Title,
  Touch,
  TouchRemove,
  IconTrash,
} from './styles';

type Props = {
  coffee: ShopCartComplete;
  onPressPlus: () => void;
  onPressMinus: () => void;
  onPressRemove: () => void;
}

export function ShopCartCard({
  coffee: { image, ml, name, qtd, priceItem },
  onPressMinus,
  onPressPlus,
  onPressRemove,
}: Props) {
  return (
    <Container>
      <Image source={image} />
      <Info>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Title numberOfLines={1}>{name}</Title>
          <Price>{moneyMask(priceItem * qtd)}</Price>
        </View>
        <Ml>{ml}</Ml>
        <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
          <Actions>
            <Touch activeOpacity={0.8} onPress={onPressPlus}>
              <IconPlus />
            </Touch>
            <TextQtd>{qtd}</TextQtd>
            <Touch activeOpacity={0.8} onPress={onPressMinus}>
              <IconMinus />
            </Touch>
          </Actions>
          <TouchRemove activeOpacity={0.8} onPress={onPressRemove}>
            <IconTrash />
          </TouchRemove>
        </View>
      </Info>
    </Container>
  )
}
