import { render, screen, fireEvent } from '@testing-library/react';

import NavLink from './nav-link';

const text = 'Text';

describe('NavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLink name="Link" href="#" />);
    expect(baseElement).toBeTruthy();
  });

  it('should trigger an onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<NavLink name={text} href="#" onClick={handleClick} />);

    fireEvent.click(screen.getByText(text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
