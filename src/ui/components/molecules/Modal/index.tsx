import { useRef } from 'react';
import { useOnClickOutside } from '@hooks';
import {
  StyledModal,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from './styles';
import { Button, CloseIcon } from '@ui';
import { IModalProps } from './types';

export function Modal({
  setIsModalOpen,
  title,
  children,
  ...props
}: IModalProps) {
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsModalOpen(false));

  return (
    <StyledModalOverlay {...props}>
      <StyledModal ref={ref}>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <Button
            onClick={() => setIsModalOpen(false)}
            size="medium"
            variant="icon"
          >
            <CloseIcon size={16} />
          </Button>
        </StyledModalHeader>
        {children}
      </StyledModal>
    </StyledModalOverlay>
  );
}
