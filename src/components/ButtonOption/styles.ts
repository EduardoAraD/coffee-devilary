import { styled, css } from "styled-components/native";

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.GRAY700};
  height: 40px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.GRAY700};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY300};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
`;
