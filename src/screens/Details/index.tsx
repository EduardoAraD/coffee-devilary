import { useCallback, useEffect, useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useShoppingCart } from "../../hooks/useShoppingCart";

import { Coffee } from "../../Model/Coffee";

import { Button } from "../../components/Button";
import { ButtonOption } from "../../components/ButtonOption";
import { Header } from "../../components/Header";
import { Price } from "../../components/Price";
import { Smoke } from "../../components/Smoke";

import { getCoffeeByName } from "../../services/getCoffeeByName";

import CoffeeImg from '../../assets/coffee.png';
import {
  Container,
  Content,
  Info,
  Description,
  HView,
  TextTypeColor,
  Title,
  ViewTypeCoffee,
  Image,
  Actions,
  Form,
  FormText,
  IconMinus,
  IconPlus,
  TextQtd,
  Touch,
  ViewOptionCoffee,
} from "./styles";

export type DetailsRoutes = {
  name: string;
}

const listMl = ['114ml', '140ml', '227ml'];

export function Details () {
  const { name } = useRoute().params as DetailsRoutes;
  const { navigate } = useNavigation();
  const { addCoffeeShopCart } = useShoppingCart();

  const [coffee, setCoffee] = useState<Coffee>({
    description: '',
    image: CoffeeImg,
    marked: 'DOCE',
    name: name,
    price: '',
  });
  const [qtdCoffee, setQtdCoffee] = useState(1);
  const [coffeeML, setCoffeeML] = useState('');
  const [errorML, setErrorML] = useState(false);
  const [errorQtd, setErrorQtd] = useState(false);

  const loadingData = useCallback(() => {
    const coffeeData = getCoffeeByName(name);
    if(coffeeData) {
      setCoffee(coffeeData);
    } else {
      console.log('CAFE NÂO ENCONTRADO');
    }
  }, [name]);

  function handleQtdCoffee(val: 1 | -1) {
    const newQtd = qtdCoffee + val;
    if(newQtd >= 0) {
      setQtdCoffee(newQtd);
      setErrorQtd(false);
    } 
  }

  function handleSetMl (value: string) {
    if(coffeeML === value) {
      setCoffeeML('');
    } else {
      setCoffeeML(value);
      setErrorML(false);
    }
  }

  function handleAddCoffeeShopping() {
    if(qtdCoffee > 0 && coffeeML !== '') {
      const newProduct = {
        ml: coffeeML,
        name: coffee.name,
        qtd: qtdCoffee,
        image: coffee.image,
      }
      addCoffeeShopCart(newProduct);

      navigate('home', { product: newProduct })
    } else {
      if(qtdCoffee <= 0) {
        setErrorQtd(true);
      }
      if(coffeeML === '') {
        setErrorML(true);
      }
    }
  }

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle='light-content' translucent />
        <Content>
          <Header showIconBack showIconShop />
          <Info>
            <ViewTypeCoffee>
              <TextTypeColor>{coffee.marked}</TextTypeColor>
            </ViewTypeCoffee>

            <HView>
              <Title>{coffee.name}</Title>
              <Price price={coffee.price} size="lg" />
            </HView>

            <Description>{coffee.description}</Description>
          </Info>

          <View>
            <Smoke />
            <Image source={CoffeeImg} />
          </View>
        </Content>

        <Form>
          <FormText isError={errorML}>Selecione o tamanho</FormText>
          <ViewOptionCoffee>
            {listMl.map(item => (
              <ButtonOption
                key={item}
                title={item}
                selected={coffeeML === item}
                isError={errorML}
                onPress={() => handleSetMl(item)}
              />
            ))}
          </ViewOptionCoffee>
          <Actions>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
              <Touch onPress={() => handleQtdCoffee(1)}>
                <IconPlus />
              </Touch>
              <TextQtd isError={errorQtd}>{qtdCoffee}</TextQtd>
              <Touch onPress={() => handleQtdCoffee(-1)}>
                <IconMinus />
              </Touch>
            </View>
            <Button
              title="ADICIONAR"
              disabled={errorML || errorQtd}
              onPress={handleAddCoffeeShopping}
            />
          </Actions>
        </Form>
      </ScrollView>
    </Container>
  )
}
