import { StyledCheckbox } from './styles';
import { CheckIcon } from '@ui';
import { ICheckboxProps } from './types';

export function Checkbox({ checked, color, ...props }: ICheckboxProps) {
  return (
    <StyledCheckbox color={color} {...props}>
      {checked && <CheckIcon size={20} />}
    </StyledCheckbox>
  );
}
