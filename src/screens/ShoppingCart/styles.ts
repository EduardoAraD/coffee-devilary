import { styled } from "styled-components/native";

export const Container = styled.View`
  paddingHorizontal: 32px;
  padding-top: 44px;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.GRAY900};
`;