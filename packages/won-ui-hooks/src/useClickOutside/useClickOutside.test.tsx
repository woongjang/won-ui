import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { PropsWithChildren, useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

/**
 *  variables for test
 */
const WRAP_DIV_TEST_ID = 'wrap-div';
const BUTTON_TEST_ID = 'won-btn';
const TEST_BUTTON_TEXT = '테스트용 버튼 텍스트';

/**
 * components for test
 */

const WrapDiv = ({ children }: PropsWithChildren) => {
  return <div data-testid={WRAP_DIV_TEST_ID}>{children}</div>;
};
const Button = () => {
  const [text, setText] = useState('');
  const ref = useRef(null);
  const handleClickEvent = (e: Event) => {
    setText(TEST_BUTTON_TEXT);
  };
  useClickOutside(ref, handleClickEvent);
  return (
    <button ref={ref} data-testid={BUTTON_TEST_ID}>
      {text}
    </button>
  );
};

/**
 * test
 */
describe('useClickOutside', () => {
  it('[eventHandler execute] button(ref)의 외부 클릭 시 handler가 호출 된다.', async () => {
    render(
      <WrapDiv>
        <Button />
      </WrapDiv>
    );
    const wrapDiv = await screen.findByTestId(WRAP_DIV_TEST_ID);
    fireEvent.mouseDown(wrapDiv);
    const btn = await screen.findByTestId(BUTTON_TEST_ID);
    expect(btn.textContent).toBe(TEST_BUTTON_TEXT);
  });
});
