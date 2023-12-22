export const dynamic = 'force-dynamic';


import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import path from 'path';
import { successBody, errorBody } from '@/app/api/utils/config';
import { getListPageData } from '@/app/api/utils/tools';

// const dataBasePath = 'src/app/api/data';

// const filePath = path.join(process.cwd(), `${dataBasePath}/category.json`);


const dataBasePath = 'tmp';

const webSiteFilePath = path.join('/', dataBasePath, `website.json`);
const filePath = path.join('/', dataBasePath, `category.json`);

async function saveData(data: any) {
  await writeJsonFile(filePath, data);
}

const handler = async (request: any) => {
  try {
    const json = await request.json();

    let dataStr: any = (await readJsonFile(filePath)) || '[]';
    let allCategorys: any = JSON.parse(dataStr);

    if (json.id == json.pId) {
      return NextResponse.json(errorBody(500, null, '父节点不能是自己'), {
        status: 200,
      });
    }

    delete json.token;

    if (!json.id) {
      // 判断同级别下是否存在
      const isHas = allCategorys.find(
        (item: any) => item.title === json.title && item.pId === json.pId,
      );
      if (isHas) {
        return NextResponse.json(errorBody(500, null, '同级别下已存在该分类'), {
          status: 200,
        });
      }

      // 新增
      json.id = allCategorys.length + 1;

      if (!json.pId) {
        json.fullId = `0-${json.id}`;
      } else {
        json.fullId = `${
          allCategorys.find((item: any) => item.id === json.pId).fullId
        }-${json.id}`;
      }

      if (json.fullId.split('-').length > 3) {
        return NextResponse.json(errorBody(500, null, '节点不能超过2层'), {
          status: 200,
        });
      }

      allCategorys.push(json);
    } else {
      // 修改
      if (!json.pId) {
        json.fullId = `0-${json.id}`;
      } else {
        json.fullId = `${
          allCategorys.find((item: any) => item.id === json.pId).fullId
        }-${json.id}`;
      }

      if (json.fullId.split('-').length > 3) {
        return NextResponse.json(errorBody(500, null, '节点不能超过2层'), {
          status: 200,
        });
      }

      allCategorys = allCategorys.map((item: any) => {
        if (item.id === json.id) {
          return json;
        }
        return item;
      });
    }

    saveData(allCategorys);

    return NextResponse.json(successBody(null), {
      status: 200,
    });
  } catch (err) {
    console.log('err - >:', err);
    return NextResponse.json(errorBody(), { status: 200 });
  }
};

export { handler as GET, handler as POST };
