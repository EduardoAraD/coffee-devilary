import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Local,
  IconMap,
  IconShop,
  TypeColorHeader,
  NumberShop,
  ViewShop,
  IconBack,
  Touch
} from "./styles";

type Props = {
  typeColor?: TypeColorHeader;
  numberItemShop?: number;
  showIconBack?: boolean;
}

export function Header({
  typeColor = 'PRIMARY',
  numberItemShop = 0,
  showIconBack = false,
}: Props) {
  const { goBack, navigate } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleGoShoppingCart() {
    console.log('NADA AINDA')
  }

  return (
    <Container typeColor={typeColor}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showIconBack ? (
          <Touch
            activeOpacity={0.8}
            onPress={handleGoBack}
            style={{ marginLeft: -10 }}
          >
            <IconBack />
          </Touch>
        ): (
          <>
            <IconMap />
            <Local typeColor={typeColor}>Caucaia, CE</Local>
          </>
        )}
      </View>
      <View>
        <Touch
          style={{ marginRight: -10 }}
          onPress={handleGoShoppingCart}
          activeOpacity={0.8}
        >
          <IconShop active={numberItemShop > 0} />
          {numberItemShop > 0 && (
            <ViewShop>
              <NumberShop>{numberItemShop}</NumberShop>
            </ViewShop>
          )}
        </Touch>
      </View>
    </Container>
  )
}
