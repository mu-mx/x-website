import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import { successBody, errorBody } from '../utils/config';
import path from 'path';

const dataBasePath = 'src/data';

const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);

export const GET = async (request: any) => {
  try {
    const result = await readJsonFile(filePath);
    return NextResponse.json(successBody(result), { status: 200 });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};

// export async function saveWebsiteData(data) {
//   const filePath = path.join(process.cwd(), `${dataBasePath}/website.json`);
//   await writeJsonFile(filePath, data);
// }
