import { render } from '@testing-library/react';

import CopyToClipboardButton from './copy-to-clipboard-button';

describe('CopyToClipboardButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyToClipboardButton />);
    expect(baseElement).toBeTruthy();
  });
});
