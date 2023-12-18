import { promises as fs } from 'fs';
import path from 'path';

// 写入JSON文件
export async function writeJsonFile(path: string, data: any) {
  try {
    await fs.writeFile(path, JSON.stringify(data), 'utf8');
    console.log('Data written to file successfully.');
  } catch (err) {
    console.error('err - >:', err);
  }
}

// 读取JSON文件
export async function readJsonFile(path: string) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.error('err - >:', err);
  }
}
