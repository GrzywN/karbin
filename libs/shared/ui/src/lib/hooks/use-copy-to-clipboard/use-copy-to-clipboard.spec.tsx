import { act, renderHook } from '@testing-library/react';

import useCopyToClipboard from './use-copy-to-clipboard';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

const text = 'Text';

describe('useCopyToClipboard', () => {
  let hook = renderHook(() => useCopyToClipboard());
  const navigatorClipboardWriteTextSpy = jest.spyOn(
    navigator.clipboard,
    'writeText'
  );

  beforeEach(() => {
    hook = renderHook(() => useCopyToClipboard());
  });

  it('should render successfully', () => {
    expect(hook).toBeTruthy();
  });

  it('should pass a given value to copy to clipboard and set state', async () => {
    let [copiedText, copyToClipboard] = hook.result.current;
    expect(copiedText).toBeNull();

    await act(() => copyToClipboard(text));
    [copiedText, copyToClipboard] = hook.result.current;

    expect(navigatorClipboardWriteTextSpy).toHaveBeenCalledWith(text);
    expect(copiedText).toBe(text);
  });
});
