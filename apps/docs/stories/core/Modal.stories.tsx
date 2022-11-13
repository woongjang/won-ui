import { ComponentMeta } from '@storybook/react';
import { Button, Modal } from '@won-ui/core/src';
import { useState } from 'react';

export default {
  title: 'won-ui/core/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div>
      <Button onClick={handleClose}>모달 오픈</Button>
      <Modal onClose={handleClose} isOpen={isOpen} overlayOptions={{ blur: 3 }} title="won-ui modal">
        모달의 내부가 되는 내용 입니다.
      </Modal>
    </div>
  );
};
