/** 成功返回 */
export const successBody = (data, code = 200, msg = 'success') =>
  JSON.stringify({
    data,
    code,
    msg,
  });

/** 错误返回 */
export const errorBody = (code = 500, data = null, msg = 'error') =>
  JSON.stringify({
    data,
    code,
    msg,
  });
