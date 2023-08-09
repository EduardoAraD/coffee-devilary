import { css, styled } from "styled-components/native";
import { MagnifyingGlass} from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY200};
  padding: 8px 12px;
  flex-direction: row;
  border-radius: 4px;
  height: 42px;
  align-items: center;
`;

export const InputComponent = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
  flex: 1;
  margin-left: 10px;
  line-height: 18px;
`;

export const Icon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  color: theme.colors.GRAY400,
  size: 18,
}))``;
