import React from 'react';
import { connect } from 'react-redux';
import Base from './base';
import api from "../../../../../api";

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class SystemUserPersonList extends React.Component {
    state = {
      operationConfig: {
        // 搜索字段列表
        searchColumnList: [
          {
            label: '用户名',
            formName: 'username',
            formType: 'input'
          }
        ]
      },
      tabConfig: {
        // 表头的字段
        columnList: [
          { title: '用户名', dataIndex: 'username' },
          {
            title: '性别', dataIndex: 'gender', render: (text, record) => (
              <span>{text === 1 ? '男' : '女'}</span>
            )
          },
          { title: '创建日期', dataIndex: 'createdAt' },
          { title: '最后修改日期', dataIndex: 'updatedAt' },
          { title: '操作', dataIndex: 'action' }
        ],
        // 操作页面的地址
        operationPath: '/system/user/person/operator/',
        // 获取列表数据的方法
        getListDataMethod: api.person.selectPersonList,
        // 删除列表数据的方法
        deleteListDataMethod: api.person.deletePersonById,
        // 删除弹框提示的字段列表
        deleteDataTipColumn: 'username'
      }
    };

    render() {
      const { state } = this;
      return (
        <Base
          operationConfig={state.operationConfig}
          tabConfig={state.tabConfig}
        />
      );
    }
  }
);
