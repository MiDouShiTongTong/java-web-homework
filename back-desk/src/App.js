import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Master from "./component/layout/master";
import Home from "./page/home";
import HomeWelcome from "./page/home/welcome";
import ErrorNotFound from "./component/error/not-found";
import User from "./page/user";
import UserPerson from "./page/user/person";
import UserPersonList from "./page/user/person/list";
import UserPersonOperator from "./page/user/person/operator";
import Library from "./page/library";
import LibraryCategory from "./page/library/category";
import LibraryCategoryList from "./page/library/category/list";
import LibraryCategoryOperator from "./page/library/category/operator";
import LibraryBook from "./page/library/book";
import LibraryBookList from "./page/library/book/list";
import LibraryBookOperator from "./page/library/book/operator";
import LibraryBorrow from "./page/library/borrow";
import LibraryBorrowList from "./page/library/borrow/list";
import LibraryBorrowOperator from "./page/library/borrow/operator";
import './App.scss';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class App extends Component {
    state = {
      routeList: [
        {
          component: Master,
          routes: [
            {
              path: '/',
              component: () => <Redirect to="/home/welcome"/>,
              // 允许子路由替换当前组件
              exact: true
            },
            // 根模块
            {
              path: '/home',
              component: Home,
              breadcrumb: '仪表盘',
              routes: [
                {
                  path: '/home/welcome',
                  component: HomeWelcome,
                  breadcrumb: '工作台'
                },
                {
                  path: '',
                  component: ErrorNotFound
                }
              ]
            },
            // 用户模块
            {
              path: '/user',
              component: User,
              breadcrumb: '用户',
              routes: [
                {
                  path: '/user/person',
                  component: UserPerson,
                  breadcrumb: '个人用户',
                  routes: [
                    {
                      path: '/user/person/list',
                      component: UserPersonList,
                      breadcrumb: '列表'
                    },
                    {
                      path: '/user/person/operator/:id',
                      component: UserPersonOperator,
                      breadcrumb: '修改'
                    },
                    {
                      path: '/user/person/operator',
                      component: UserPersonOperator,
                      breadcrumb: '添加'
                    }
                  ]
                }
              ]
            },
            // 图书模块
            {
              path: '/library',
              component: Library,
              breadcrumb: '图书',
              routes: [
                {
                  path: '/library/category',
                  component: LibraryCategory,
                  breadcrumb: '图书分类',
                  routes: [
                    {
                      path: '/library/category/list',
                      component: LibraryCategoryList,
                      breadcrumb: '列表'
                    },
                    {
                      path: '/library/category/operator/:id',
                      component: LibraryCategoryOperator,
                      breadcrumb: '修改'
                    },
                    {
                      path: '/library/category/operator',
                      component: LibraryCategoryOperator,
                      breadcrumb: '添加'
                    }
                  ]
                },
                {
                  path: '/library/book',
                  component: LibraryBook,
                  breadcrumb: '图书信息',
                  routes: [
                    {
                      path: '/library/book/list',
                      component: LibraryBookList,
                      breadcrumb: '列表'
                    },
                    {
                      path: '/library/book/operator/:id',
                      component: LibraryBookOperator,
                      breadcrumb: '修改'
                    },
                    {
                      path: '/library/book/operator',
                      component: LibraryBookOperator,
                      breadcrumb: '添加'
                    }
                  ]
                },
                {
                  path: '/library/borrow',
                  component: LibraryBorrow,
                  breadcrumb: '图书借阅',
                  routes: [
                    {
                      path: '/library/borrow/list',
                      component: LibraryBorrowList,
                      breadcrumb: '列表'
                    },
                    {
                      path: '/library/borrow/operator/:id',
                      component: LibraryBorrowOperator,
                      breadcrumb: '修改'
                    },
                    {
                      path: '/library/borrow/operator',
                      component: LibraryBorrowOperator,
                      breadcrumb: '添加'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    render() {
      const { state } = this;
      return (
        <main className="app-container">
          <BrowserRouter basename="/">
            {renderRoutes(state.routeList)}
          </BrowserRouter>
        </main>
      );
    }
  }
);
