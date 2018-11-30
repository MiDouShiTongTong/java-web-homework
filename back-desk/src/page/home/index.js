import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class Home extends React.Component {
    state = {
      // 控制是否可以渲染
      isRender: true
    };

    render() {
      const { state, props } = this;
      if (state.isRender) {
        return (
          <section className="home-container">
            {renderRoutes(props.route.routes)}
          </section>
        );
      } else {
        return (
          <section className="alter">当前状态不可渲染！</section>
        );
      }
    }
  }
);
