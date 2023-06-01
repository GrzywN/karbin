import s from 'slugify';

// This implementation should be the same as in new-article generator
export function slugify(str: string): string {
  return s(str, {
    trim: true,
    lower: true,
  });
}
