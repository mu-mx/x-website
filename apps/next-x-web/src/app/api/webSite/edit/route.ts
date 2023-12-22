export const dynamic = 'force-dynamic';


import { writeJsonFile, readJsonFileAndParse } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';

const dataBasePath = 'src/app/api/data';

const webSiteFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/website.json`,
);
const categoryFilePath = path.join(
  process.cwd(),
  `${dataBasePath}/category.json`,
);

async function saveData(data: any) {
  await writeJsonFile(webSiteFilePath, data);
}

const handler = async (request: any) => {
  try {
    const json = await request.json();
    let datas: any = await readJsonFileAndParse(webSiteFilePath);
    let categoryDatas: any = await readJsonFileAndParse(categoryFilePath);

    delete json.token;

    json.fullId = categoryDatas.find(
      (item: any) => item.id === json.pId,
    ).fullId;

    if (!json.id) {
      // 新增
      json.id = datas.length + 1;

      datas.push(json);
    } else {
      // 修改
      datas = datas.map((item: any) => {
        if (item.id === json.id) {
          return json;
        }
        return item;
      });
    }

    saveData(datas);

    return NextResponse.json(successBody(null), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 200 });
  }
};

export { handler as GET, handler as POST };
