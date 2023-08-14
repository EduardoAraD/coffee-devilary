import { ShoppingCart } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 64px;
  width: 100%;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.MD}px;
  `}
  margin-top: 12px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Icon = styled(ShoppingCart).attrs(({ theme }) => ({
  color: theme.colors.GRAY400,
  weight: "fill",
}))`
  align-self: center;
`;
