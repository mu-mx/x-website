import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';
import { getListPageData } from '@/app/api/utils//tools';

const dataBasePath = 'src/data';

const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);

export const GET = async (request: any) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const current = searchParams.get('current');
    const pageSize = searchParams.get('pageSize');
    const title = searchParams.get('title');
    const pId = searchParams.get('pId');

    let dataStr: any = (await readJsonFile(filePath)) || '[]';
    let data: any = JSON.parse(dataStr);

    let { list, total } = getListPageData({
      data,
      current,
      pageSize,
      title,
      pId,
    });
    const map: any = {};
    (data || []).forEach((item: any) => {
      map[item.id] = item;
    });

    list = list.map((item: any) => {
      return {
        ...item,
        pTitle: map[item.pId]?.title,
        // fullId: `${map[item.pId]?.fullId || '0'}-${item.id}`,
      };
    });

    return NextResponse.json(successBody({ list, total }), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};
