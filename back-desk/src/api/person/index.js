import ajax from '../../util/ajax';
import config from '../../config';

/**
 * 用户相关接口
 *
 */
export default {
  // 获取用户列表
  selectPersonList(data) {
    return ajax(
      'GET',
      `${config.API_ROOT}/person`,
      data
    );
  },
  // 获取用户详情
  selectPersonById(id) {
    return ajax(
      'GET',
      `${config.API_ROOT}/person/${id}`
    );
  },
  // 新增用户
  insertPerson(data) {
    return ajax(
      'POST',
      `${config.API_ROOT}/person`,
      data
    );
  },
  // 修改用户
  updatePersonById(id, data) {
    return ajax(
      'PUT',
      `${config.API_ROOT}/person/${id}`,
      data
    );
  },
  // 删除用户
  deletePersonById(id) {
    return ajax(
      'DELETE',
      `${config.API_ROOT}/person/${id}`
    );
  }
};
