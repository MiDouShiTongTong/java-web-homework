import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// 非路由组件
import ErrorNotFound from '../../component/error/not-found';

export default class RouterList extends React.Component {
  static propTypes = {
    routeList: PropTypes.array.isRequired
  };

  // 添加元信息
  insertMeta = (Component, meta) => {
    return (props) => <Component meta={meta} {...props}/>;
  };

  render() {
    const { props } = this;
    return (
      <Switch>
        {
          props.routeList.map((route, index) => {
            if (route.redirect === undefined) {
              return <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={this.insertMeta(route.component, route.componentMeta)}
              />;
            } else {
              return <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={() => {
                  return <Redirect to={route.redirect}/>;
                }}
              />;
            }
          })
        }
        {/* 404 */}
        <Route component={ErrorNotFound}/>
      </Switch>
    );
  }
}
