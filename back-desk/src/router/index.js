import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// 非路由组件
import RouteList from '../component/route-list';
import LoadingRouter from '../component/loading';
import LayoutSidebar from "../component/layout/sidebar";
import LayoutHeader from "../component/layout/header";

import './index.scss';

// 路由组件
const Home = Loadable({
  loader: () => import('../page/home'),
  loading: LoadingRouter
});

const User = Loadable({
  loader: () => import('../page/user'),
  loading: LoadingRouter
});

export default class Router extends React.Component {
  state = {
    routeList: [
      {
        path: '/',
        redirect: '/home',
        exact: true,
      },
      // 根模块
      {
        path: '/home',
        component: Home,
        exact: false
      },
      // 用户模块
      {
        path: '/user',
        component: User,
        exact: false
      }
    ]
  };

  render() {
    const { state } = this;
    return (
      <section className="router-container">
        {/*所有路由的入口*/}
        <BrowserRouter basename="/">
          <section className="main-container">
            <LayoutSidebar/>
            <section className="content-container">
              <LayoutHeader/>
              <RouteList routeList={state.routeList}/>
            </section>
          </section>
        </BrowserRouter>
      </section>
    );
  }
}
