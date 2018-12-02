import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import {updateUserInfo} from "../../../store/account";

// 非路由组件
import LayoutSystemSidebar from "./sidebar/index";
import LayoutSystemHeader from "./header/index";

import './index.scss';

export default connect(
  // mapStateToProps
  state => {
    return {
      userInfo: state.account.userInfo
    };
  },
  // mapDispatchToProps
  {
    updateUserInfo
  }
)(
  class LayoutSystem extends React.Component {
    state = {
      // 控制是否可以渲染
      isRender: false
    };

    componentDidMount = () => {
      const { props } = this;
      if (!props.userInfo.hasOwnProperty('id')) {
        props.history.push('/account/signIn');
      } else {
        this.setState({
          isRender: true
        });
      }
    };

    render() {
      const { state, props } = this;

      if (state.isRender) {
        return (
          <section className="layout-system-container">
            <section className="main-container">
              <LayoutSystemSidebar/>
              <section className="content-container">
                <LayoutSystemHeader routeMatchList={matchRoutes(props.route.routes, props.location.pathname)}/>
                {renderRoutes(props.route.routes)}
              </section>
            </section>
          </section>
        );
      } else {
        return <section>加载中!</section>;
      }
    }
  }
);
