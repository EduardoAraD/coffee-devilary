import { Minus, Plus } from "phosphor-react-native";
import { css, styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY900};
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY100};
  paddingHorizontal: 32px;
  padding-top: 44px;
`;

export const Info = styled.View`
  margin-top: 12px;
`;

export const ViewTypeCoffee = styled.View`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.GRAY400};
  align-self: flex-start;
  border-radius: 50%;
`;

export const TextTypeColor = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Roboto.BOLD};
    font-size: ${theme.fontSize.TEXT.TAG}px;
  `}
`;

export const HView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.Text`
  margin-bottom: 3px;
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.LG}px;
  `}
`;

export const Description = styled.Text`
  margin-top: 15px;
  ${({ theme }) => css`
    color: ${theme.colors.GRAY500};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.MD}px;
  `}
`;

export const Image = styled.Image`
  margin-bottom: -60px;
`;

export const Form = styled.View`
  padding: 42px 32px;
  width: 100%;
`;

export const FormText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
  margin-bottom: 8px;
`;

export const ViewOptionCoffee = styled.View`
  flex-direction: row;
  column-gap: 8px;
  width: 100%;
  justify-content: space-between;
`;

export const Actions = styled.View`
  padding: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.GRAY700};
  margin-top: 20px;
  column-gap: 16px;
  border-radius: 6px;
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

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.PURPLE,
}))``;

export const IconMinus = styled(Minus).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.PURPLE,
}))``;
