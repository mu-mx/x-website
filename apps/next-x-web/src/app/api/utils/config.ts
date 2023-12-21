/** 成功返回 */
export const successBody = (data: any, code = 200, msg = 'success') => ({
  data,
  code,
  msg,
});

/** 错误返回 */
export const errorBody = (code = 500, data = null, msg = 'error') => ({
  data,
  code,
  msg,
});
