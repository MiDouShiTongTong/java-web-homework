import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { connect } from 'react-redux';

// 非路由组件
import LayoutSidebar from "../sidebar/index";
import LayoutHeader from "../header/index";

import './index.scss';

export default connect(
  // mapStateToProps
  state => {
    return {
    };
  },
  // mapDispatchToProps
  {}
)(
  class LayoutMaster extends React.Component {
    render() {
      const { props } = this;
      return (
        <section className="layout-master-container">
          {/*所有路由的入口*/}
          <section className="main-container">
            <LayoutSidebar/>
            <section className="content-container">
              <LayoutHeader routeMatchList={matchRoutes(props.route.routes, props.location.pathname)}/>
              {renderRoutes(props.route.routes)}
            </section>
          </section>
        </section>
      );
    }
  });
