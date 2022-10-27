import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('버튼 렌더링 테스트', () => {
    render(<Button data-testid="won-ui-button" />);
    expect(screen.getByTestId('won-ui-button')).toBeInTheDocument();
  });
});
