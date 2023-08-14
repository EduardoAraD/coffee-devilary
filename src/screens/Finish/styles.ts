import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY800};
  padding: 48px;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 40px;
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.LG}px;
    text-align: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
    text-align: center;
  `}
  margin-top: 8px;
  margin-bottom: 64px;
`;
