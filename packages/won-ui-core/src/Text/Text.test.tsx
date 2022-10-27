import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  const testId = 'won-ui-text';
  afterEach(cleanup);
  it('[rendering] Text 컴포넌트 렌더링', () => {
    render(<Text data-testid={testId}>test</Text>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('[as] as 커스텀 컴포넌트', () => {
    render(
      <Text as="div" data-testid={testId}>
        div
      </Text>
    );
    expect(screen.getByTestId(testId).tagName).toBe('DIV');
  });
});
