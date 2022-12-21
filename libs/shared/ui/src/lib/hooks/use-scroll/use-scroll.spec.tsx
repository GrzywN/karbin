import { renderHook } from '@testing-library/react';

import useScroll from './use-scroll';

describe('useScroll', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current.scrollX).toBe(0);
    expect(result.current.scrollY).toBe(0);
    expect(result.current.scrollDirection).toBe('down');
  });
});
