/** 获取列表页数据 */
export function getListPageData(filters: any) {
  const { data, current, pageSize, ...other } = filters;
  let res = data;

  for (const key in other) {
    if (![undefined, null].includes(other[key])) {
      res = res.filter((item: any) =>
        item[key].toString().includes(other[key]),
      );
    }
  }
  res = pagingFunction(current, pageSize, res);
  return {
    list: res,
    total: res.length,
  };
}

/** 分页函数 */
export const pagingFunction = (
  pageNo: number = 1,
  pageSize: number = 10,
  array: any,
) => {
  const offset = (pageNo - 1) * pageSize;

  return offset + pageSize >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + pageSize);
};
