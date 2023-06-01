import { readFileSync } from 'fs';
import { join } from 'path';

export function jsonContent(): string {
  return 'json-content';
}

export function getParsedJsonContent(locale: string, path: string) {
  const postFilePath = join(path, `${locale}.json`);
  const fileContent = readFileSync(postFilePath);
  const parsedFileContent = JSON.parse(fileContent.toString());

  return parsedFileContent;
}
