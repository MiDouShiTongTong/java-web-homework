import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 图书分类相关接口
 *
 */
export default {
  // 获取图书分类列表
  selectBookList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/book`,
      data
    );
  },
  // 获取用户详情
  selectBookById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/book/${id}`
    );
  },
  // 新增用户
  insertBook(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/book`,
      data
    );
  },
  // 修改用户
  updateBookById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/book/${id}`,
      data
    );
  },
  // 删除用户
  deleteBookById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/book/${id}`
    );
  }
};
