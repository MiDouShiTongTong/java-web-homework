import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 图书分类相关接口
 *
 */
export default {
  // 获取列表
  selectBookBorrowList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookBorrow`,
      data
    );
  },
  // 获取详情
  selectBookBorrowById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/bookBorrow/${id}`
    );
  },
  // 新增
  insertBookBorrow(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/bookBorrow`,
      data
    );
  },
  // 修改
  updateBookBorrowById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/bookBorrow/${id}`,
      data
    );
  },
  // 删除
  deleteBookBorrowById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/bookBorrow/${id}`
    );
  }
};
