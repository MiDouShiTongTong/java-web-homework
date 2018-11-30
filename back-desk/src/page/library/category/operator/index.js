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
  class LibraryCategoryOperator extends React.Component {
    state = {};

    render() {
      return (
        <section className="library-category-operator-container">
          library-category-operator-container
        </section>
      );
    }
  }
);
