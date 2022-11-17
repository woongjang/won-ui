import { useClickOutside } from '@won-ui/hooks';
import { X } from 'phosphor-react';
import { createRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { IconActivator } from '../IconActivator/IconActivator';
import { Overlay } from '../Overlay/Overlay';
import { Text } from '../Text/Text';
import { bodyStyle, modalStyle, titleStyle, wrapperStyle } from './Modal.style';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  overlayOptions?: {
    opacity?: number;
    blur?: number;
  };
  modalOptions?: {
    width?: number;
  };
}

export function Modal({
  title,
  isOpen,
  onClose,
  className,
  modalOptions = { width: 500 },
  overlayOptions = { opacity: 0.65, blur: 0 },
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = createRef<HTMLDivElement>();
  useClickOutside(modalRef, e => {
    if (onClose) onClose();
  });

  if (!isOpen) return null;

  return (
    <div css={wrapperStyle} className={className}>
      <div ref={modalRef} css={modalStyle(modalOptions)}>
        <div css={titleStyle}>
          <Text as="span">{title}</Text>
          <IconActivator hasBorder={false} onClick={onClose}>
            <X weight="bold" />
          </IconActivator>
        </div>
        <div css={bodyStyle}>{children}</div>
      </div>
      <Overlay opacity={overlayOptions.opacity} blur={overlayOptions.blur} />
    </div>
  );
}

Modal.displayName = 'WON-Modal';
