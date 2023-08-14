import { useMemo, useRef } from "react";
import { FlatList, View } from "react-native";
import Animated, { Layout, SlideInRight, SlideOutRight } from "react-native-reanimated";
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { useShoppingCart } from "../../hooks/useShoppingCart";

import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { ShopCartCard } from "../../components/ShopCartCard";
import { ShopFinish } from "../../components/ShopFinish";

import { Container, IconTrash, Line, ViewRemove } from "./styles";

export function ShoppingCart() {
  const { navigate } = useNavigation();
  const {
    shopCart,
    updateQtdCoffeeShopCart,
    removeCoffeeShopCart,
    clearShopCart
  } = useShoppingCart();

  const swiapebleRefs = useRef<Swipeable[]>([]);

  async function handleRemoveItemShopCart(id: number) {
    await removeCoffeeShopCart(id);
  }

  async function handleUpdateItem(idItem: number, qtdItem: number) {
    if(qtdItem === 0) {
      await handleRemoveItemShopCart(idItem);
    } else {
      await updateQtdCoffeeShopCart({ id: idItem, qtd: qtdItem })
    }
  }

  async function handleConfirm() {
    await clearShopCart();
    
    navigate('finish');
  }

  const price: number = useMemo(() => {
    let value = 0;
    shopCart.forEach(({ priceItem, qtd }) => {
      value += priceItem * qtd
    });
    return value;
  }, [shopCart])

  return (
    <Container>
      <View style={{ marginHorizontal: 32 }}>
        <Header showIconBack typeColor="SECUNDARY" title="CARRINHO" />
      </View>
      <Line />
      <FlatList
        data={shopCart}
        renderItem={({ item, index }) => (
          <Animated.View
            key={item.id}
            entering={SlideInRight.delay(100 * index)}
            exiting={SlideOutRight}
            layout={Layout.springify()}
          >
            <Swipeable
              ref={(ref) => {
                if(ref) {
                  swiapebleRefs.current.push(ref);
                }
              }}
              overshootLeft={false}
              leftThreshold={10}
              renderRightActions={() => null}
              onSwipeableOpen={() => handleRemoveItemShopCart(item.id)}
              renderLeftActions={() => (
                <ViewRemove>
                  <IconTrash />
                </ViewRemove>
              )}
            >
              <ShopCartCard
                coffee={item}
                onPressMinus={() => handleUpdateItem(item.id, item.qtd - 1)}
                onPressPlus={() => handleUpdateItem(item.id, item.qtd + 1)}
                onPressRemove={() => handleRemoveItemShopCart(item.id)}
              />
            </Swipeable>
          </Animated.View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty />}
      />
      {price > 0 && (
        <ShopFinish
          price={price}
          onPressConfirm={handleConfirm}
        />
      )}
    </Container>
  )
}
