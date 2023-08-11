import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import Animated from "react-native-reanimated";
import { styled, css } from "styled-components/native";

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 0px;
  padding: 32px;
  padding-top: 28px;
  flex-direction: row;
  column-gap: 20px;

  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ViewIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY500};
  height: 36px;
  width: 36px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ViewNumberShop = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const NumberShop = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.XS}px;
  `}
`;

export const Text = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.BOLD};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
`;

export const Touch = styled.TouchableOpacity`
  height: 36px;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`;

export const TextTouch = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.PURPLE};
    font-family: ${theme.fontFamily.Roboto.BOLD};
    font-size: ${theme.fontSize.TEXT.XS}px;
  `}
`;

export const Icon = styled(ArrowRight).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 16,
}))``;

export const IconShop = styled(ShoppingCart).attrs(({ theme }) => ({
  color: theme.colors.WHITE,
  size: 20,
}))``;
