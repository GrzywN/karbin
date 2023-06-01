import { DEFAULT_WPM, readingTime } from './reading-time';

describe('readingTime', () => {
  it('should return 0 for an empty string', () => {
    const text = '';
    const expected = 0;
    const result = readingTime(text);
    expect(result).toBe(expected);
  });

  it('should return 1 for a single word', () => {
    const text = 'Hello';
    const expected = 1;
    const result = readingTime(text);
    expect(result).toBe(expected);
  });

  it('should return 1 for a short sentence', () => {
    const text = 'Hello, how are you?';
    const expected = 1;
    const result = readingTime(text);
    expect(result).toBe(expected);
  });

  it('should return the correct reading time for a longer text', () => {
    const howManyRepeats = 4;
    const text = 'word '.repeat(DEFAULT_WPM * howManyRepeats);
    const expected = howManyRepeats;

    const result = readingTime(text);
    expect(result).toBe(expected);
  });

  it('should return the correct reading time with a custom words per minute (wpm)', () => {
    const howManyRepeats = 16;
    const wpm = 300;
    const text = 'word '.repeat(wpm * howManyRepeats);
    const expected = howManyRepeats;

    const result = readingTime(text, wpm);
    expect(result).toBe(expected);
  });
});
