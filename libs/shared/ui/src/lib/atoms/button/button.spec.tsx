import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a children', () => {
    const BUTTON_TEXT = 'Button text';
    const { baseElement } = render(<Button>{BUTTON_TEXT}</Button>);

    expect(baseElement).toHaveTextContent(BUTTON_TEXT);
  });

  it('should render successfully with a ReactNode passed as a children', () => {
    const BUTTON_TEXT = 'Button text with some kind of icon';
    const BUTTON_NODE = <p>{BUTTON_TEXT}</p>;
    const { baseElement } = render(<Button>{BUTTON_NODE}</Button>);

    expect(baseElement).toHaveTextContent(BUTTON_TEXT);
  });

  it('should be disabled when is loading', () => {
    render(<Button isLoading />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be enabled when is not loading', () => {
    render(<Button />);

    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should trigger an onClick event when clicked', () => {
    const BUTTON_TEXT = 'Button text';
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{BUTTON_TEXT}</Button>);

    fireEvent.click(screen.getByText(BUTTON_TEXT));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
