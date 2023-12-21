import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '../utils/config';
import { getListPageData } from '../utils/tools';

const dataBasePath = 'src/data';

const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);

export async function saveData(data: any) {
  await writeJsonFile(filePath, data);
}

export const GET = async (request: any) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const current = searchParams.get('current');
    const pageSize = searchParams.get('pageSize');
    const title = searchParams.get('title');
    const pid = searchParams.get('pid');

    let data = await readJsonFile(filePath);

    const { list, total } = getListPageData({
      data,
      current,
      pageSize,
      title,
      pid,
    });

    return NextResponse.json(successBody({ list, total }), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};

export const POST = async (request: any) => {
  try {
    const json = await request.json();
    console.log('json - >:', json);

    saveData(json);

    return NextResponse.json(successBody(null), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 200 });
  }
};
