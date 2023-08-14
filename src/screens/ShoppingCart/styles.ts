import { Trash } from "phosphor-react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  padding-top: 44px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY900};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.GRAY700};
`;

export const ViewRemove = styled.View`
  background-color: ${({ theme }) => theme.colors.RED_LIGHT};
  justify-content: center;
  align-items: center;
  width: 95px;
`;

export const IconTrash = styled(Trash).attrs(({ theme }) => ({
  color: theme.colors.RED_DARK,
  size: 28,
}))``;
