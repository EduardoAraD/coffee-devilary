import { Button } from "../Button";

import { moneyMask } from "../../utils/mask";

import { Container, Info, Price, Text } from "./styles";

type Props = {
  price: number;
  onPressConfirm: () => void;
}

export function ShopFinish({ onPressConfirm, price }: Props) {
  return (
    <Container style={{ elevation: 1 }}>
      <Info>
        <Text>Valor total</Text>
        <Price>R$ {moneyMask(price)}</Price>
      </Info>
      <Button
        title="CONFIRMAR PEDIDO"
        typeColor="SECUNDARY"
        onPress={onPressConfirm}
        style={{ minHeight: 46 }}
      />
    </Container>
  )
}
