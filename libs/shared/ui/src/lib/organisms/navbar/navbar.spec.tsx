import { render } from '@testing-library/react';

import Navbar from './navbar';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Navbar>
        <h2>Logo</h2>
        <Navbar.Nav>
          <a href="#lorem">Lorem ipsum</a>
          <a href="#lorem">Lorem ipsum</a>
          <a href="#lorem">Lorem ipsum</a>
        </Navbar.Nav>
      </Navbar>
    );
    expect(baseElement).toBeTruthy();
  });
});
