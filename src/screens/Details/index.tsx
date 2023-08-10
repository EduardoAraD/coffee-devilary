import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header";

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
import { ScrollView, StatusBar, View } from "react-native";

import { Button } from "../../components/Button";
import { ButtonOption } from "../../components/ButtonOption";
import { Price } from "../../components/Price";
import { Smoke } from "../../components/Smoke";

import CoffeeImg from '../../assets/coffee.png';
import { useCallback, useEffect, useState } from "react";
import { Coffee } from "../../Model/Coffee";
import { getCoffeeByName } from "../../services/getCoffeeByName";

export type DetailsRoutes = {
  name: string;
}

export function Details () {
  const { name } = useRoute().params as DetailsRoutes;

  const [coffee, setCoffee] = useState<Coffee>({
    description: '',
    image: CoffeeImg,
    marked: 'DOCE',
    name: name,
    price: '',
  })

  const loadingData = useCallback(() => {
    const coffeeData = getCoffeeByName(name);
    if(coffeeData) {
      setCoffee(coffeeData);
    } else {
      console.log('CAFE NÂO ENCONTRADO')
    }
  }, [name]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle='light-content' translucent />
        <Content>
          <Header numberItemShop={3} showIconBack />
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
          <FormText>Selecione o tamanho</FormText>
          <ViewOptionCoffee>
            <ButtonOption title="114ml" />
            <ButtonOption title="140ml" />
            <ButtonOption title="227ml" />
          </ViewOptionCoffee>
          <Actions>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
              <Touch>
                <IconPlus />
              </Touch>
              <TextQtd>1</TextQtd>
              <Touch>
                <IconMinus />
              </Touch>
            </View>
            <Button title="ADICIONAR" disabled onPress={() => { console.log('TRSA')}} />
          </Actions>
        </Form>
      </ScrollView>
    </Container>
  )
}
