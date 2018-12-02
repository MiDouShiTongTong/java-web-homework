import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 图书分类相关接口
 *
 */
export default {
  // 获取列表
  selectBookList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/book`,
      data
    );
  },
  // 获取详情
  selectBookById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/book/${id}`
    );
  },
  // 新增
  insertBook(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/book`,
      data
    );
  },
  // 修改
  updateBookById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/book/${id}`,
      data
    );
  },
  // 删除
  deleteBookById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/book/${id}`
    );
  }
};
