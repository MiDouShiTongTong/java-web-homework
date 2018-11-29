import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import './index.scss';

export default connect(
  state => {
    // mapStateToProps
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class LayoutHeader extends React.Component {
    render() {
      return (
        <section className="layout-header-container">
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
        </section>
      );
    }
  }
);
