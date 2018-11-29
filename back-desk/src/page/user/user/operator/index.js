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
  class UserUserOperator extends React.Component {
    state = {};

    render() {
      return (
        <section className="operator-container">
          user-user-operator-container
        </section>
      );
    }
  }
);
