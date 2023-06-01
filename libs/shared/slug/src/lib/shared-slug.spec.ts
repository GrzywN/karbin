import { slugify } from './shared-slug';

describe('slugify', () => {
  it('should convert string to slug', () => {
    const input = 'This is a test String';
    const expectedOutput = 'this-is-a-test-string';
    expect(slugify(input)).toBe(expectedOutput);
  });

  it('should remove leading and trailing spaces', () => {
    const input = '  example string   ';
    const expectedOutput = 'example-string';
    expect(slugify(input)).toBe(expectedOutput);
  });

  it('should convert uppercase letters to lowercase', () => {
    const input = 'HELLO World';
    const expectedOutput = 'hello-world';
    expect(slugify(input)).toBe(expectedOutput);
  });

  it('should handle special characters', () => {
    const input = 'ęóąśżźćń';
    const expectedOutput = 'eoaszzcn';
    expect(slugify(input)).toBe(expectedOutput);
  });

  it('should handle numbers', () => {
    const input = '123 Test String 456';
    const expectedOutput = '123-test-string-456';
    expect(slugify(input)).toBe(expectedOutput);
  });
});
