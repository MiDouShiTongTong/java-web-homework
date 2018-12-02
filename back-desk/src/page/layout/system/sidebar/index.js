import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { withRouter, NavLink } from 'react-router-dom';
import './index.scss';
import NProgress from 'nprogress';

export default withRouter(connect(
  state => {
    // mapStateToProps
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class LayoutSystemSidebar extends React.Component {
    state = {
      sideBarMenuList: [
        {
          key: '1',
          icon: 'pie-chart',
          name: '仪表盘',
          children: [
            {
              key: '1-1',
              name: '工作台',
              path: '/system/home/welcome'
            }
          ]
        },
        {
          key: '2',
          icon: 'user',
          name: '用户',
          children: [
            {
              key: '2-1',
              name: '个人用户',
              path: '/system/user/person/list'
            },
          ]
        },
        {
          key: '3',
          icon: 'desktop',
          name: '图书',
          children: [
            {
              key: '3-1',
              name: '图书分类',
              path: '/system/library/category/list'
            },
            {
              key: '3-2',
              name: '图书信息',
              path: '/system/library/book/list'
            },
            {
              key: '3-3',
              name: '图书借阅',
              path: '/system/library/borrow/list'
            }
          ]
        }
      ]
    };

    /**
     * 获取 当前的 url 对应的菜单
     *
     * @returns null
     */
    getSelectKey = () => {
      NProgress.start();
      const { state, props } = this;
      let currentMenuPathName = '';
      const currentMenuPathNameArr = props.history.location.pathname.split('/');
      currentMenuPathName += currentMenuPathNameArr[2];
      currentMenuPathName += currentMenuPathNameArr[3];

      let selectKey = null;
      state.sideBarMenuList.forEach(menuItem => {
        if (selectKey) {
          // 已找到对应的菜单退出循环
          return false;
        }
        menuItem.children.forEach(menuItemChildItem => {
          let menuPathName = '';
          const menuPathNameArr = menuItemChildItem.path.split('/');
          menuPathName += menuPathNameArr[2];
          menuPathName += menuPathNameArr[3];
          if (currentMenuPathName === menuPathName) {
            selectKey = menuItemChildItem;
            // 已找到对应的菜单退出循环
            return false;
          }
        });
      });

      NProgress.done();
      return selectKey != null ? selectKey.key : '1';
    };

    render() {
      const { state, props } = this;
      return (
        <section className="layout-sidebar-container">
          <section className="logo-container">
            <NavLink to="/">图书管理后台</NavLink>
          </section>
          <Menu
            defaultOpenKeys={['1', '2', '3']}
            selectedKeys={[this.getSelectKey()]}
            mode="inline"
            theme="dark">
            {state.sideBarMenuList.map(sideBarMenuListItem => {
              return (
                // 一级路由
                <Menu.SubMenu
                  key={sideBarMenuListItem.key}
                  title={
                    <span>
                      <Icon type={sideBarMenuListItem.icon}/>
                      <span>{sideBarMenuListItem.name}</span>
                    </span>
                  }>
                  {sideBarMenuListItem.children.map(sideBarMenuListItemChildrenItem => {
                    return (
                      // 二级路由
                      <Menu.Item
                        key={sideBarMenuListItemChildrenItem.key}
                        onClick={() => {
                          // 刷新路由 如果当前路由和菜单点击的路由相同则不触发
                          if (props.location.pathname !== sideBarMenuListItemChildrenItem.path) {
                            props.history.push(sideBarMenuListItemChildrenItem.path);
                          }
                        }}>
                        {sideBarMenuListItemChildrenItem.name}
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>
              );
            })}
          </Menu>
        </section>
      );
    }
  }
));
