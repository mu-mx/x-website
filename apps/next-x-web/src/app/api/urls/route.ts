export const dynamic = 'force-dynamic';


import {
  writeJsonFile,
  readJsonFile,
  readJsonFileAndParse,
} from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';

const dataBasePath = 'src/app/api/data';

const websiteFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/website.json`,
);
const categoryFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/category.json`,
);

const mapToTree = (data: any) => {
  const res: any = [];
  const map: any = {};
  data.forEach((item: any) => {
    map[item.id] = item;
  });
  data.forEach((item: any) => {
    const parent = map[item.pId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      res.push(item);
    }
  });
  return res;
};

export const GET = async (request: any) => {
  try {
    let categoryDatas: any = await readJsonFileAndParse(categoryFilePath);
    const categoryMap: any = {};
    categoryDatas.forEach((item: any) => {
      item.children = [];
      categoryMap[item.id] = item;
    });

    let data: any = await readJsonFileAndParse(websiteFilePath);

    data.forEach((item: any) => {
      if (categoryMap[item.pId]) {
        categoryMap[item.pId].children.push(item);
      }
    });

    // data = data.map((item: any) => {
    //   return {
    //     ...item,
    //     pTitle: categoryMap[item.pId]?.title,
    //   };
    // });

    return NextResponse.json(successBody(mapToTree(categoryDatas)), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 500 });
  }
};
