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
  class LibraryBorrowList extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-borrow-list-container">
          library-borrow-list-container
        </section>
      );
    }
  }
);
