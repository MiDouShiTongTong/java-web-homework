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
  class LibraryBookOperator extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-book-operator-container">
          library-book-operator-container
        </section>
      );
    }
  }
);
