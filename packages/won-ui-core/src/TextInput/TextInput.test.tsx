import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('[rendering] TextInput 컴포넌트 렌더링', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('[value] value 정적으로 주입시에 value를 우선으로 함', async () => {
    render(<TextInput value="won-ui" />);
    const textbox = screen.getByRole('textbox');

    await userEvent.type(textbox, 'won');

    expect(textbox).not.toHaveValue('won');
  });

  it('[only onChange] onChange만 주입시 value는 변경되지만 onChange는 따로 호출됨', async () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} />);
    const textbox = screen.getByRole('textbox');

    await userEvent.type(textbox, 'won');

    expect(textbox).toHaveValue('won');
    expect(handleChange).toHaveBeenCalledTimes(3);
  });

  it('[placeholder] placeholder 체크', () => {
    render(<TextInput placeholder="won-ui" />);

    expect(screen.getByPlaceholderText('won-ui')).toBeInTheDocument();
  });

  it('[id] 사용자가 id를 직접 입력한 경우에는 입력값을 사용', () => {
    render(<TextInput id="won-test-text-input" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'won-test-text-input');
  });

  it('[label click] id입력 없이 label 클릭 시 input 으로 포커싱', async () => {
    render(<TextInput label="won-ui-label" />);
    const textbox = screen.getByRole('textbox');
    const label = screen.getByLabelText(/won-ui-label/i);

    expect(textbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    await userEvent.click(label);
    expect(textbox).toHaveFocus();
  });

  it('[disabled] disabled 가능한지 체크', () => {
    render(<TextInput disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  it('[disabled click] disabled 시에 클릭에 대한 이벤트가 발생하면 안됨', async () => {
    const handleClick = jest.fn();
    render(<TextInput onClick={handleClick} disabled/>);

    await userEvent.click(screen.getByRole('textbox'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
