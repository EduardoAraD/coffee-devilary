import { css, styled } from "styled-components/native";

export const Touch = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.GRAY700};
  border-radius: 6px 36px 6px 36px;
  width: 100%;

  flex-direction: row;
  padding: 16px;
  column-gap: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  margin-left: -8px;
  margin-top: -32px;
  height: 96px;
  width: 96px;
`;

export const Info = styled.View`
  flex: 1;
  row-gap: 4px;
`;

export const Title = styled.Text`
  ${({theme }) => css`
    color: ${theme.colors.GRAY200};
    font-family: ${theme.fontFamily.Baloo2.BOLD};
    font-size: ${theme.fontSize.TITLE.SM}px;
  `}
`;

export const Description = styled.Text`
  margin-bottom: 4px;
  ${({theme }) => css`
    color: ${theme.colors.GRAY400};
    font-family: ${theme.fontFamily.Roboto.REGULAR};
    font-size: ${theme.fontSize.TEXT.XS}px;
  `}
`;
