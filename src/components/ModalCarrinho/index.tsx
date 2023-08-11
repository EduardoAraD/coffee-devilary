import { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { useShoppingCart } from "../../hooks/useShoppingCart";

import {
  Container,
  Icon,
  IconShop,
  NumberShop,
  Text,
  TextBold,
  TextTouch,
  Touch,
  ViewIcon,
  ViewNumberShop,
} from './styles';

type Props = {
  name: string;
  ml: string;
  qtd: string;
}

export function ModalShopCart ({ ml, name, qtd }: Props) {
  const { navigate } = useNavigation();
  const { shopCart } = useShoppingCart();

  function handleGoShoppingCart() {
    navigate('shopping')
  }

  return (
    <Container
      entering={SlideInDown.duration(1000)}
      exiting={SlideOutDown.duration(1000)}
    >
      <ViewIcon>
        <IconShop />
        <ViewNumberShop>
          <NumberShop>{shopCart.length}</NumberShop>
        </ViewNumberShop>
      </ViewIcon>
      <Text>
        {qtd} café <TextBold>{name}</TextBold> de <TextBold>{ml}</TextBold> adicionado ao carrinho
      </Text>
      <Touch activeOpacity={0.8} onPress={handleGoShoppingCart}>
        <TextTouch>VER</TextTouch>
        <Icon />
      </Touch>
    </Container>
  )
}
