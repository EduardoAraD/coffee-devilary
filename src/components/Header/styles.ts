import { ArrowLeft, MapPin, ShoppingCart } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

export type TypeColorHeader = 'PRIMARY' | 'SECUNDARY';
type ColorTypeProps = {
  typeColor: TypeColorHeader;
}

type ActiveProps = {
  active: boolean;
}

export const Container = styled.View<ColorTypeProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  paddingVertical: 10px;
  background-color: ${({ theme, typeColor }) =>
    typeColor === 'PRIMARY' ? theme.colors.GRAY100 : theme.colors.GRAY900
  };
`;

export const Local = styled.Text<ColorTypeProps>`
  ${({ theme, typeColor }) => css`
    color: ${typeColor === 'PRIMARY' ? theme.colors.GRAY900 : theme.colors.GRAY100};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `};
  margin-left: 8px;
`;

export const ViewShop = styled.View`
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.PURPLE};
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: 0px;
`;

export const NumberShop = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.XS}px;
  `};
`;

export const Touch = styled.TouchableOpacity`
  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.SM}px;
  `};
`;

export const IconBack = styled(ArrowLeft).attrs<ColorTypeProps>(({ theme, typeColor }) => ({
  color: typeColor === 'PRIMARY' ? theme.colors.WHITE : theme.colors.GRAY200,
  size: 20,
  weight: 'bold'
}))``;

export const IconMap = styled(MapPin).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 20,
  weight: 'fill'
}))``;

export const IconShop = styled(ShoppingCart).attrs<ActiveProps>(({ theme, active }) => ({
  color: active ? theme.colors.PURPLE : theme.colors.YELLOW,
  size: 20,
  weight: 'fill'
}))``;
