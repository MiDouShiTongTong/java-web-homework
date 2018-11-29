import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { withRouter, NavLink } from 'react-router-dom';
import './index.scss';

export default withRouter(connect(
  state => {
    // mapStateToProps
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class LayoutSidebar extends React.Component {
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
              path: '/home/welcome'
            }
          ]
        },
        {
          key: '2',
          icon: 'user',
          name: '用户管理',
          children: [
            {
              key: '2-1',
              name: '用户列表',
              path: '/user/user/list'
            },
          ]
        },
        {
          key: '3',
          icon: 'desktop',
          name: '图书管理',
          children: [
            {
              key: '3-1',
              name: '分类管理',
              path: '/book/category/list'
            },
            {
              key: '3-2',
              name: '图书管理',
              path: '/book/book/list'
            },
            {
              key: '3-3',
              name: '借阅管理',
              path: '/book/borrow/list'
            }
          ]
        }
      ]
    };

    /**
     * 获取当前菜单的 key
     *
     * @returns null
     */
    getSelectKey = () => {
      const { state, props } = this;
      let currentMenuPathName = '';
      const currentMenuPathNameArr = props.history.location.pathname.split('/');
      currentMenuPathName += currentMenuPathNameArr[1];
      currentMenuPathName += currentMenuPathNameArr[2];

      let selectKey = null;
      state.sideBarMenuList.forEach(menuItem => {
        return menuItem.children.forEach(menuItemChildItem => {
          let menuPathName = '';
          const menuPathNameArr = menuItemChildItem.path.split('/');
          menuPathName += menuPathNameArr[1];
          menuPathName += menuPathNameArr[2];
          if (currentMenuPathName === menuPathName) {
            selectKey = menuItemChildItem;
            return true;
          }
        });
      });

      return selectKey.key;
    };

    render() {
      const { state, props } = this;
      return (
        <section className="layout-sidebar-container">
          <section className="logo-container">
            <NavLink to="/">图书管理系统</NavLink>
          </section>
          <Menu
            defaultOpenKeys={['1', '2', '3']}
            selectedKeys={[this.getSelectKey()]}
            mode="inline"
            theme="dark"
          >
            {state.sideBarMenuList.map(sideBarMenuListItem => {
              return (
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
                      <Menu.Item
                        key={sideBarMenuListItemChildrenItem.key}
                        onClick={() => props.history.push(sideBarMenuListItemChildrenItem.path)}>
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
