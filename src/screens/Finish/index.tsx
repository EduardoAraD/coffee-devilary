import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { MotoAnimated } from '../../components/MotoAnimated';

import { Container, Text, Title } from "./styles";

export function Finish() {
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate('home', {});
  }

  return (
    <Container>
      <StatusBar translucent barStyle='dark-content' />
      <MotoAnimated />

      <Title>Uhu! Pedido confirmado</Title>
      <Text>Agora é só aguardar que logo o café chegará até você!</Text>

      <Button
        title='IR PARA A HOME'
        style={{ maxHeight: 46 }}
        onPress={handleGoHome}
      />
    </Container>
  )
}