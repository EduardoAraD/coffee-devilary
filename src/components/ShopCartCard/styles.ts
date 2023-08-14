import { Minus, Plus, Trash } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 16px 32px;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.GRAY700};
  background-color: ${({theme}) => theme.colors.GRAY900};
`;

export const Image = styled.Image`
  height: 64px;
  width: 64px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY100};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.MD}px;
    flex: 1;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY100};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.SM}px;
  `}
`;

export const Ml = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const Actions = styled.View`
  flex-direction: row;
  /* background-color: ${({ theme }) => theme.colors.GRAY700}; */
  column-gap: 4px;
  border-radius: 6px;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.GRAY600};
`;

export const TextQtd = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY100};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.MD}px;
  `}
`;

export const Touch = styled.TouchableOpacity`
  padding: 8px;
`;

export const TouchRemove = styled.TouchableOpacity`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.GRAY700};
  border-radius: 6px;
  margin-left: 8px;
`;

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.PURPLE,
}))``;

export const IconMinus = styled(Minus).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.PURPLE,
}))``;

export const IconTrash = styled(Trash).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.PURPLE,
}))``;
