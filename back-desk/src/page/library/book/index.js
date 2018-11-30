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
  class LibraryBook extends React.Component {
    state = {};

    render() {
      const { props } = this;
      return (
        <section className="library-book-container">
          {renderRoutes(props.route.routes)}
        </section>
      );
    }
  }
);
