import { render } from '@testing-library/react';

import LanguageSwitcher from './language-switcher';

describe('LanguageSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguageSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
