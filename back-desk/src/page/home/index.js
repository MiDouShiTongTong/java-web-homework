import React from 'react';
import { connect } from 'react-redux';

// 非路由组件
import RouteList from '../../component/route-list';
import HomeWelcome from '../../page/home/welcome';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class Home extends React.Component {
    state = {
      routeList: [
        {
          path: '/home',
          redirect: '/home/welcome',
          exact: true
        },
        {
          path: '/home/welcome',
          component: HomeWelcome,
          componentProps: {},
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
          <div className="home-container">
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
