import { View, ViewProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useShoppingCart } from "../../hooks/useShoppingCart";

import {
  Container,
  Local,
  IconMap,
  IconShop,
  TypeColorHeader,
  NumberShop,
  ViewShop,
  IconBack,
  Touch,
  Title,
} from "./styles";

type Props = ViewProps & {
  typeColor?: TypeColorHeader;
  title?: string;
  showIconBack?: boolean;
  showIconShop?: boolean;
}

export function Header({
  typeColor = 'PRIMARY',
  title,
  showIconBack = false,
  showIconShop = false,
}: Props) {
  const { shopCart } = useShoppingCart();
  const { goBack, navigate } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleGoShoppingCart() {
    navigate('shopping');
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
            <IconBack typeColor={typeColor} />
          </Touch>
        ): (
          <>
            <IconMap />
            <Local typeColor={typeColor}>Caucaia, CE</Local>
          </>
        )}
      </View>
      {title && (
        <Title>{title}</Title> 
      )}
      {showIconShop ? (
        <View>
          <Touch
            style={{ marginRight: -10 }}
            onPress={handleGoShoppingCart}
            activeOpacity={0.8}
          >
            <IconShop active={shopCart.length > 0} />
            {shopCart.length > 0 && (
              <ViewShop>
                <NumberShop>{shopCart.length}</NumberShop>
              </ViewShop>
            )}
          </Touch>
        </View>
      ) : (
        <View style={{ width: 30, height: 40, }} />
      )}
      
    </Container>
  )
}
