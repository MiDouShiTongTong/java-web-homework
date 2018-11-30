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
  class LibraryBookList extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-book-list-container">
          library-book-list-container
        </section>
      );
    }
  }
);
