import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '../utils/config';

const dataBasePath = 'src/data';

const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);

export const GET = async (request: any) => {
  try {
    const data = await readJsonFile(filePath);
    return NextResponse.json(successBody(data), { status: 200 });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};

// export async function saveWebsiteData(data) {
//   const filePath = path.join(process.cwd(), `${dataBasePath}/website.json`);
//   await writeJsonFile(filePath, data);
// }
