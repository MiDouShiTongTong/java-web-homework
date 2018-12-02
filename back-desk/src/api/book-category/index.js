import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 图书分类相关接口
 *
 */
export default {
  // 获取列表
  selectBookCategoryList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookCategory`,
      data
    );
  },
  // 获取详情
  selectBookCategoryById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookCategory/${id}`
    );
  },
  // 新增
  insertBookCategory(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/bookCategory`,
      data
    );
  },
  // 修改
  updateBookCategoryById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/bookCategory/${id}`,
      data
    );
  },
  // 删除
  deleteBookCategoryById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/bookCategory/${id}`
    );
  }
};
