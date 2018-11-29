import React from 'react';
import { connect } from 'react-redux';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class HomeWelcome extends React.Component {
    state = {};

    render() {
      return (
        <section className="home-welcome-container">
          home-welcome-container
        </section>
      );
    }
  }
);
