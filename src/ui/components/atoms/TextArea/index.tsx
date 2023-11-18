import { StyledTextarea, StyledTextareaWrap } from './styles';
import { ComponentPropsWithRef } from 'react';

export function TextArea({ ...props }: ComponentPropsWithRef<'textarea'>) {
  return (
    <StyledTextareaWrap>
      <StyledTextarea {...props} />
    </StyledTextareaWrap>
  );
}
