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
  class UserUserList extends React.Component {
    state = {};

    render() {
      return (
        <section className="user-user-list-container">
          user-user-list-container
        </section>
      );
    }
  }
);
