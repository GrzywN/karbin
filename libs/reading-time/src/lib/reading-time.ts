export const DEFAULT_WPM = 225;

export function readingTime(text: string, wpm = DEFAULT_WPM): number {
  if (text.length === 0) {
    return 0;
  }

  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
