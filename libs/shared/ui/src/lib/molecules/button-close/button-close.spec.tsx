import { render, fireEvent, screen } from '@testing-library/react';

import ButtonClose from './button-close';

const text = 'Text';

describe('ButtonClose', () => {
  it('should render successfully', () => {
    const handleClick = jest.fn();
    const { baseElement } = render(
      <ButtonClose ariaLabel={text} onClick={handleClick} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should trigger an onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ButtonClose ariaLabel={text} onClick={handleClick}>
        {text}
      </ButtonClose>
    );

    fireEvent.click(screen.getByLabelText(text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
