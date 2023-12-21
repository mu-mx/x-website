import {
  writeJsonFile,
  readJsonFile,
  readJsonFileAndParse,
} from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';
import { getListPageData } from '@/app/api/utils/tools';

const dataBasePath = 'src/data';

const webSiteFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/website.json`,
);
const categoryFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/category.json`,
);

export const GET = async (request: any) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const current = searchParams.get('current');
    const pageSize = searchParams.get('pageSize');

    const title = searchParams.get('title');
    const state = searchParams.get('state');
    const pId = searchParams.get('pId');

    let webDatas: any = await readJsonFileAndParse(webSiteFilePath);
    let categoryDatas: any = await readJsonFileAndParse(categoryFilePath);

    let { list, total } = getListPageData({
      data: webDatas,
      current,
      pageSize,
      title,
      pId,
      state,
    });
    const categoryMap: any = {};
    categoryDatas.forEach((item: any) => {
      categoryMap[item.id] = item;
    });

    list = list.map((item: any) => {
      return {
        ...item,
        pTitle: categoryMap[item.pId]?.title,
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
