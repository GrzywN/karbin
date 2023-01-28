import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoadingSpinner from './loading-spinner';

describe('LoadingSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingSpinner />);
    expect(baseElement).toBeTruthy();
  });

  it('should have text content', () => {
    const text = 'Text';
    const { baseElement } = render(<LoadingSpinner>{text}</LoadingSpinner>);
    expect(baseElement).toHaveTextContent(text);
  });

  it('should have not visible text content', () => {
    const text = 'Text';
    const { baseElement } = render(<LoadingSpinner>{text}</LoadingSpinner>);
    const hiddenElement = screen.queryByText(text);

    expect(baseElement).toHaveTextContent(text);
    expect(hiddenElement).toBeInTheDocument();
    expect(hiddenElement).toHaveClass('invisible');
  });
});
