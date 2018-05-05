import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../../../components/messages/ConfirmEmailMessage';
import AddBookCta from '../ctas/AddBookCta';
import { allBooksSelector } from '../../../Reducer/books';
import { fetchBooks } from '../../../actions';

class DashboardPage extends Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {books.length === 0 && <AddBookCta />}
      </div>
    );
  }
}

// DashboardPage.propTypes = {
//     isConfirmed: PropTypes.bool.isRequired
// };

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
