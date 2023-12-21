import { promises as fs } from 'fs';
import path from 'path';

// 写入JSON文件
export async function writeJsonFile(path: string, data: any) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 1), 'utf8');
    console.log('Data written to file successfully.');
  } catch (err) {
    console.error('err - >:', err);
  }
}

// 读取JSON文件
export async function readJsonFile(path: string) {
  try {
    return await fs.readFile(path, 'utf8');
  } catch (err) {
    console.error('err - >:', err);
  }
}

export async function readJsonFileAndParse(filePath: string): Promise<any> {
  let dataStr: string = (await readJsonFile(filePath)) || '[]';
  return JSON.parse(dataStr);
}
