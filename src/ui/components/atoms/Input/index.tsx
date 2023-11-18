import { StyledInput, StyledInputWrap } from './styles';
import { IInputProps } from './types';

export function Input({ dataCy, ...props }: IInputProps) {
  return (
    <StyledInputWrap>
      <StyledInput {...props} />
    </StyledInputWrap>
  );
}
