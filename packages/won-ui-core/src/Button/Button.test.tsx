import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Button, ButtonProps } from './Button';

/**
 * 각 테스트 메시지
 * [주요 테스트 사항] 세부 설명
 */

describe('Button', () => {
  afterEach(cleanup);

  const testId = 'won-ui-button';
  it('[rendering] Button 컴포넌트 렌더링', () => {
    render(<Button data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('[children] children props 지원', () => {
    render(
      <Button>
        <span>children</span>
      </Button>
    );
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it.each<ButtonProps['type']>(['button', 'submit', 'reset'])('[type] type props 지원', type => {
    render(
      <Button type={type} data-testid={testId}>
        test
      </Button>
    );
    expect(screen.getByTestId(testId)).toHaveAttribute('type', type);
  });

  it('[disabled] disabled 적용 여부', () => {
    const { rerender } = render(<Button data-testid={testId}>test</Button>);
    expect(screen.getByTestId(testId)).not.toBeDisabled();

    rerender(
      <Button disabled data-testid={testId}>
        test
      </Button>
    );
    expect(screen.getByTestId(testId)).toBeDisabled();
  });
});
