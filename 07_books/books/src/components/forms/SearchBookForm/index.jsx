import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class SearchBookForm extends Component {
  state = {
    query: '',
    loading: false,
    options: [],
    books: {} // hashBooks
  };
  /**
   * при нажатии на клавиши запускается данный метод
   */
  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };
  /**
   * выбор данных из полученного списка
   */
  onChange = (e, data) => {
    console.log('--CHECKING: onChange in SearchBookForm--', data);
    this.setState({ query: data.value });
    this.props.onBookSelect(this.state.books[data.value]);
    console.log('--CHECKING: this.state.books[data.value]--', this.state.books[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`/api/books/search?q=${this.state.query.searchQuery}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  };

  render() {
    console.log('--CHECKING: fetchOptions--', this.state);
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a new book"
          value={this.state.query.searchQuery}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
