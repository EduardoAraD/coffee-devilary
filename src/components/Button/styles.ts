import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: ${({ disabled }) => disabled ? 0.8 : 1};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fontFamily.Roboto.BOLD};
    font-size: ${theme.fontSize.TEXT.BUTTON}px;
  `}
`;
