import { MapPin, ShoppingCart } from "phosphor-react-native";
import { styled, css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.GRAY800};
`;

export const Content = styled.View`
  background-color: ${props => props.theme.colors.GRAY100};
  padding-top: 44px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const HView = styled.View`
  margin-bottom: 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Local = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY900};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `};
  margin-left: 8px;
`;

export const Title = styled.Text`
  margin-top: 34px;
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.LG}px;
  `};
`;

export const ViewCoffee = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-left: 25px;
  margin-bottom: 54px;
`;

export const IconMap = styled(MapPin).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 20,
  weight: 'fill'
}))``;

export const IconShop = styled(ShoppingCart).attrs(({ theme }) => ({
  color: theme.colors.YELLOW,
  size: 20,
  weight: 'fill'
}))``;

export const Container2 = styled.View`
  flex: 1;
  padding: 32px;
`;

export const ViewOptions = styled.View`
  width: 100%;
  padding-vertical: 16px;
  row-gap: 12px;
`;

export const TextTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY300};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.SM}px;
  `}
`;

export const TextSection = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.XS}px;
  `}
`; 
