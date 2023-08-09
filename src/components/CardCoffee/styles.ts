import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 16px 20px;
  background-color: ${props => props.theme.colors.RED_DARK};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  width: 208px;

  margin-top: 20px;
  align-items: center;
`;

export const ViewMarked = styled.View`
  background-color: ${({ theme }) => theme.colors.PURPLE_LIGHT};
  padding: 4px 8px;
  border-radius: 50%;
  margin-top: 8px;
`;

export const TextMarked = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Roboto.BOLD};
    color: ${theme.colors.PURPLE_DARK};
    font-size: ${theme.fontSize.TEXT.TAG}px;
  `}
`;

export const Title = styled.Text`
  margin-top: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    color: ${theme.colors.GRAY200};
    font-size: ${theme.fontSize.TITLE.MD}px;
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    color: ${theme.colors.GRAY400};
    font-size: ${theme.fontSize.TEXT.XS}px;
  `}
  margin-bottom: 12px;
`;
