import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 28px 32px 70px 32px;
  row-gap: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.MD}px;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.MD}px;
  `}
`;
