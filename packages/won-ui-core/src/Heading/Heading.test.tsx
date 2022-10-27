import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Heading, HeadingProps } from './Heading';

describe('Heading', () => {
  const testId = 'won-ui-heading';
  afterEach(cleanup);
  it('[rendering] Heading 컴포넌트 렌더링', () => {
    render(<Heading data-testid={testId}>test</Heading>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it.each<HeadingProps['level']>([1, 2, 3])(
    '[level] Heading 컴포넌트 level(h1, h2, ...) 테스트',
    level => {
      const { rerender } = render(
        <Heading level={level} data-testid={testId}>
          h{level}
        </Heading>
      );
      if (level === 1) {
        // 기본값 테스트
        rerender(<Heading data-testid={testId}>h{level}</Heading>);
        expect(screen.getByTestId(testId).tagName).toBe('H1');
      }
      expect(screen.getByTestId(testId).tagName).toBe(`H${level}`);
    }
  );
});
