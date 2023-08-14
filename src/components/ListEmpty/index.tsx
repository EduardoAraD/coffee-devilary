import { useNavigation } from "@react-navigation/native";

import { Button } from "../Button";

import { Container, Icon, Text } from "./styles";

export function ListEmpty() {
  const { navigate } = useNavigation();

  function handleGoHome() {
    return navigate("home", {});
  }

  return (
    <Container>
      <Icon />
      <Text>Seu carrinho está vazio</Text>
      <Button
        title="VER CATÁLOGO"
        activeOpacity={0.8}
        onPress={handleGoHome}
      />
    </Container>
  )
}
