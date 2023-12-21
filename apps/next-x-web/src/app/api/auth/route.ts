export const dynamic = 'force-dynamic';

import { writeJsonFile, readJsonFile } from '@/app/api/utils/files';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { successBody, errorBody } from '@/app/api/utils/config';
import path from 'path';

const dataBasePath = 'src/data';

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    successBody({
      name: 'admin',
      introduction: 'I am a super administrator',
      token: 'admin',
    }),
    { status: 200 },
  );
};

// export async function saveWebsiteData(data) {
//   const filePath = path.join(process.cwd(), `${dataBasePath}/website.json`);
//   await writeJsonFile(filePath, data);
// }
