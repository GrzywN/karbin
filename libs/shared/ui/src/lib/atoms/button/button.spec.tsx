import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './button';

const text = 'Text';
const node = <p>{text}</p>;

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with a text passed as a child', () => {
    const { baseElement } = render(<Button>{text}</Button>);

    expect(baseElement).toHaveTextContent(text);
  });

  it('should render successfully with a ReactNode passed as a child', () => {
    const { baseElement } = render(<Button>{node}</Button>);

    expect(baseElement).toHaveTextContent(text);
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
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{text}</Button>);

    fireEvent.click(screen.getByText(text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
