import { css, styled } from "styled-components/native";

export const Container = styled.Pressable`
  background-color: red;
  padding: 6px 12px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.TAG}px;
  `}
`;
