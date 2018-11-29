import React from 'react';
import { connect } from 'react-redux';

// 非路由组件
import RouteList from '../../component/route-list';
import UserUserList from './user/list/index';
import UserUserOperator from './user/operator/index';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class User extends React.Component {
    state = {
      routeList: [
        {
          path: '/user',
          redirect: '/user/user/list',
          exact: true
        },
        {
          path: '/user/user/list',
          component: UserUserList,
          exact: true
        },
        {
          path: '/user/user/operator',
          component: UserUserOperator,
          exact: true
        }
      ],
      // 控制是否可以渲染
      isRender: true
    };

    render() {
      const { state } = this;
      if (state.isRender) {
        return (
          <div className="user-container">
            <RouteList routeList={state.routeList}/>
          </div>
        );
      } else {
        return (
          <div className="alter">当前状态不可渲染！</div>
        );
      }
    }
  }
);
