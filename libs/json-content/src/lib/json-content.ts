import { readFileSync } from 'fs';
import { join } from 'path';

export function jsonContent(): string {
  return 'json-content';
}

export function getStringifiedJsonContent(locale: string, path: string) {
  const postFilePath = join(path, `${locale}.json`);
  const fileContent = readFileSync(postFilePath);
  const stringifiedFileContent = JSON.parse(fileContent.toString()) as unknown;

  return stringifiedFileContent;
}
