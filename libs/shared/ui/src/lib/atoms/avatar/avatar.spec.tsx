import { render } from '@testing-library/react';

import Avatar from './avatar';

describe('Avatar', () => {
  it('should render successfully with an image passed as a children', () => {
    const { baseElement } = render(
      <Avatar>
        <img src="data:image/png;base64," alt="" />
      </Avatar>
    );
    expect(baseElement).toBeTruthy();
  });
});
