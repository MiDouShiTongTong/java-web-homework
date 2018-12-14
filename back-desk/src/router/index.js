import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import LayoutMaster from '../page/layout/master';
import LayoutSystem from '../page/layout/system';
import SystemHome from '../page/system/home';
import SystemHomeWelcome from '../page/system/home/welcome';
import ErrorNotFound from '../component/error/not-found';
import SystemUser from '../page/system/user';
import SystemUserPerson from '../page/system/user/person';
import SystemUserPersonList from '../page/system/user/person/list';
import SystemUserPersonOperator from '../page/system/user/person/operator';
import SystemLibrary from '../page/system/library';
import SystemLibraryCategory from '../page/system/library/category';
import SystemLibraryCategoryList from '../page/system/library/category/list';
import SystemLibraryCategoryOperator from '../page/system/library/category/operator';
import SystemLibraryBook from '../page/system/library/book';
import SystemLibraryBookList from '../page/system/library/book/list';
import SystemLibraryBookOperator from '../page/system/library/book/operator';
// import SystemLibraryBorrow from '../page/system/library/borrow';
import SystemLibraryBorrowList from '../page/system/library/borrow/list';
import SystemLibraryBorrowOperator from '../page/system/library/borrow/operator';
import LayoutAccount from '../page/layout/account';
import AccountSignIn from '../page/account/sign-in';
import Loadable from 'react-loadable';

const SystemLibraryBorrow = Loadable({
  loader: () => import('../page/system/library/borrow'),
  loading: () => {
    return <div>123</div>
  }
});

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class Router extends React.Component {
    state = {
      routeList: [
        {
          // 根模块
          path: '/',
          component: LayoutMaster,
          routes: [
            {
              // 系统模块
              path: '/system',
              component: LayoutSystem,
              routes: [
                // 仪表盘模块
                {
                  path: '/system/home',
                  component: SystemHome,
                  breadcrumb: '仪表盘',
                  routes: [
                    {
                      path: '/system/home/welcome',
                      component: SystemHomeWelcome,
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
                  path: '/system/user',
                  component: SystemUser,
                  breadcrumb: '用户',
                  routes: [
                    {
                      path: '/system/user/person',
                      component: SystemUserPerson,
                      breadcrumb: '个人用户',
                      routes: [
                        {
                          path: '/system/user/person/list',
                          component: SystemUserPersonList,
                          breadcrumb: '列表'
                        },
                        {
                          path: '/system/user/person/operator/:id',
                          component: SystemUserPersonOperator,
                          breadcrumb: '编辑'
                        },
                        {
                          path: '/system/user/person/operator',
                          component: SystemUserPersonOperator,
                          breadcrumb: '添加'
                        }
                      ]
                    }
                  ]
                },
                // 图书模块
                {
                  path: '/system/library',
                  component: SystemLibrary,
                  breadcrumb: '图书',
                  routes: [
                    {
                      path: '/system/library/category',
                      component: SystemLibraryCategory,
                      breadcrumb: '图书分类',
                      routes: [
                        {
                          path: '/system/library/category/list',
                          component: SystemLibraryCategoryList,
                          breadcrumb: '列表'
                        },
                        {
                          path: '/system/library/category/operator/:id',
                          component: SystemLibraryCategoryOperator,
                          breadcrumb: '编辑'
                        },
                        {
                          path: '/system/library/category/operator',
                          component: SystemLibraryCategoryOperator,
                          breadcrumb: '添加'
                        }
                      ]
                    },
                    {
                      path: '/system/library/book',
                      component: SystemLibraryBook,
                      breadcrumb: '图书信息',
                      routes: [
                        {
                          path: '/system/library/book/list',
                          component: SystemLibraryBookList,
                          breadcrumb: '列表'
                        },
                        {
                          path: '/system/library/book/operator/:id',
                          component: SystemLibraryBookOperator,
                          breadcrumb: '编辑'
                        },
                        {
                          path: '/system/library/book/operator',
                          component: SystemLibraryBookOperator,
                          breadcrumb: '添加'
                        }
                      ]
                    },
                    {
                      path: '/system/library/borrow',
                      component: SystemLibraryBorrow,
                      breadcrumb: '图书借阅',
                      routes: [
                        {
                          path: '/system/library/borrow/list',
                          component: SystemLibraryBorrowList,
                          breadcrumb: '列表'
                        },
                        {
                          path: '/system/library/borrow/operator/:id',
                          component: SystemLibraryBorrowOperator,
                          breadcrumb: '编辑'
                        },
                        {
                          path: '/system/library/borrow/operator',
                          component: SystemLibraryBorrowOperator,
                          breadcrumb: '添加'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              path: '/account',
              component: LayoutAccount,
              routes: [
                {
                  path: '/account/signIn',
                  component: AccountSignIn
                }
              ]
            },
            {
              path: '',
              component: () => <Redirect to='/system/home/welcome'/>
            }
          ]
        }
      ]
    };

    render() {
      const { state } = this;
      return (
        <BrowserRouter basename='/'>
          {renderRoutes(state.routeList)}
        </BrowserRouter>
      );
    }
  }
);
