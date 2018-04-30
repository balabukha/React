import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import SearchBookForm from '../../forms/SearchBookForm';
import BookForm from '../../forms/BookForm';

export default class NewBookPage extends Component {
  state = { book: null };

  onBookSelect = book => {
    console.log('--CHECKING: onBookSelect--', this.state.book);
    this.setState({ book });
  };

  addBook = () => console.log('--CHECKING: addBook--', this.state.book);

  render() {
    return (
      <Segment>
        <h1>Add a new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && <BookForm submit={this.addBook} book={this.state.book} />}
      </Segment>
    );
  }
}
