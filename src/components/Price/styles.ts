import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const RS = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `}
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  margin-left: 3px;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fontSize.TITLE.LG}px;
  `}
`;
