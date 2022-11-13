import { css } from '@emotion/react';
import { ModalProps } from './Modal';
export const wrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const modalStyle = (options: ModalProps['modalOptions']) => css`
  position: relative;
  padding: 16px;
  width: ${options?.width}px;
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
`;

export const titleStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const bodyStyle = css`
  padding-top: 10px;
  box-sizing: border-box;
`;
