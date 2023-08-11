import { styled, css } from "styled-components/native";

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.GRAY700};
  height: 40px;
  flex: 1;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.GRAY700};
`;

type ColorStyle = {
  selected: boolean;
}

export const Text = styled.Text<ColorStyle>`
  ${({ theme, selected }) => css`
    color: ${selected ? theme.colors.PURPLE : theme.colors.GRAY300};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.SM}px;
  `};
  position: absolute;
  width: 100%;
  text-align: center;
  top: 30%;
`;
