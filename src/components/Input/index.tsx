import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { InputComponent, Container, Icon } from './styles';

type Props = TextInputProps & {}

export function Input({ style, ...rest }: Props) {
  const { colors: { GRAY400 } } = useTheme();

  return (
    <Container style={style}>
      <Icon />
      <InputComponent
        placeholderTextColor={GRAY400}
        {...rest}
      />
    </Container>
  )
}
