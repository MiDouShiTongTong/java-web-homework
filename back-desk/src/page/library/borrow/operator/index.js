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
  class LibraryBorrowOperator extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-borrow-operator-container">
          library-borrow-operator-container
        </section>
      );
    }
  }
);
