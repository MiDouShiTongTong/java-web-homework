import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Menu, Breadcrumb } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.scss';

export default withRouter(connect(
  state => {
    // mapStateToProps
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class LayoutHeader extends React.Component {
    static propTypes = {
      routeMatchList: PropTypes.array.isRequired
    };

    state = {
      routeMatchList: [],
      showBreadcrumb: true
    };

    /**
     * 刷新面包屑导航
     *
     */
    refreshBreadcrumb = () => {
      const { props, state } = this;
      // 防止重复刷新视图
      if (state.routeMatchList === props.routeMatchList) {
        return false;
      } else {
        // 每次路由改变(隐藏面包屑, 等待 300 毫秒在显示)
        setTimeout(() => {
          this.setState({
            // 改变面包屑为当前路由对应的数据
            routeMatchList: props.routeMatchList,
            showBreadcrumb: false
          });
        }, 0);
        setTimeout(() => {
          this.setState({
            showBreadcrumb: true
          });
        }, 200);
      }
    };

    render() {
      const { props, state } = this;
      props.location.pathname && this.refreshBreadcrumb();
      return (
        <section className="layout-header-container">
          {/* 顶部操作栏 */}
          <section className="nav-container">
            <div className="nav-item current-sign-in-user">
              <Dropdown overlay={(
                <Menu>
                  <Menu.Item key="1">退出登录</Menu.Item>
                </Menu>
              )}>
                <span>admin</span>
              </Dropdown>
            </div>
          </section>
          {/* 根据路由渲染面包屑 */}
          <QueueAnim
            type={['right', 'right']}
            duration={200}>
            {state.showBreadcrumb ? (
              <Breadcrumb key={'breadcrumb'}>
                {state.routeMatchList.map((routeMatch, index) => (
                  <Breadcrumb.Item key={index}>{routeMatch.route.breadcrumb}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
            ) : null}
          </QueueAnim>
        </section>
      );
    }
  }
));
