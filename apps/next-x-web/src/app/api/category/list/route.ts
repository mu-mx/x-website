export const dynamic = 'force-dynamic';


import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';

// const dataBasePath = 'src/app/api/data';

// const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);


const dataBasePath = 'tmp';

const webSiteFilePath = path.join('/', dataBasePath, `website.json`);
const filePath = path.join('/', dataBasePath, `category.json`);

export const GET = async (request: any) => {
  try {
    let dataStr: any = (await readJsonFile(filePath)) || '[]';
    let data: any = JSON.parse(dataStr);

    return NextResponse.json(successBody(data), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};
