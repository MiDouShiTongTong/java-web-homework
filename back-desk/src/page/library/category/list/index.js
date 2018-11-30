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
  class LibraryCategoryList extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-category-list-container">
          library-category-list-container
        </section>
      );
    }
  }
);
