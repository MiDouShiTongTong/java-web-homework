import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 图书分类相关接口
 *
 */
export default {
  // 获取图书分类列表
  selectBookCategoryList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookCategory`,
      data
    );
  },
  // 获取用户详情
  selectBookCategoryById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookCategory/${id}`
    );
  },
  // 新增用户
  insertBookCategory(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/bookCategory`,
      data
    );
  },
  // 修改用户
  updateBookCategoryById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/bookCategory/${id}`,
      data
    );
  },
  // 删除用户
  deleteBookCategoryById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/bookCategory/${id}`
    );
  }
};
