import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export type TypeSize = 'lg' | 'md';
type SizeProps = {
  size: TypeSize;
}

export const RS = styled.Text<SizeProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${size === 'md' ? theme.fontSize.TEXT.SM : theme.fontSize.TEXT.MD}px;
    margin-bottom: ${size === 'md' ? 4 : 8}px;
  `}
`;

export const Text = styled.Text<SizeProps>`
  margin-left: 3px;
  ${({ theme, size }) => css`
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${size === 'md' ? theme.fontSize.TITLE.LG : theme.fontSize.TITLE.XL}px;
  `}
`;
