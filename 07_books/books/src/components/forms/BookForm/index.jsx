import React, { Component } from 'react';
import { Segment, Form, Grid, Image, Button } from 'semantic-ui-react';
import InlineError from '../InlineError';

class BookForm extends Component {
  state = {
    data: {
      goodreadsId: this.props.book.goodreadsId,
      title: this.props.book.title,
      authirs: this.props.book.authirs,
      cover: this.props.book.covers[0],
      pages: this.props.book.pages
    },
    covers: this.props.book.covers,
    loading: false,
    errors: {},
    index: 0
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        goodreadsId: props.book.goodreadsId,
        title: props.book.title,
        authors: props.book.authors,
        cover: props.book.covers[0],
        pages: props.book.pages
      },
      covers: props.book.covers
    });
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.anme]: e.target.value }
    });

  onChangeNumber = e =>
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.respond.data.errors, loading: false }));
    }
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Can't be blank";
    if (!data.authors) errors.authors = "Can't be blank";
    if (!data.pages) errors.pages = "Can't be blank";

    return errors;
  };

  changeCover = () => {
    const { index, covers } = this.state;
    const newIndex = index + 1 >= covers.length ? 0 : index + 1;
    this.setState({
      index: newIndex,
      data: {
        ...this.state.data,
        cover: covers[newIndex]
      }
    });
  };

  render() {
    console.log('--CHECKING: this.props--', this.props);
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid colums={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Book title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={this.onChange}
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>
                <Form.Field error={!!errors.authors}>
                  <label htmlFor="title">Book authors</label>
                  <input
                    type="text"
                    id="authors"
                    name="authors"
                    value={data.authors}
                    onChange={this.onChange}
                  />
                  {errors.authors && <InlineError text={errors.authors} />}
                </Form.Field>
                <Form.Field error={!!errors.pages}>
                  <label htmlFor="title">Pages</label>
                  <input
                    disabled={data.pages === undefined}
                    type="string"
                    id="pages"
                    name="pages"
                    value={data.pages ? data.pages : 'Loading...'}
                    onChange={this.onChangeNumber}
                  />
                  {errors.pages && <InlineError text={errors.pages} />}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" src={data.cover} />
                {this.state.covers.length > 1 && (
                  <a role="button" tabIndex={0} onClick={this.changeCover}>
                    next cover
                  </a>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

export default BookForm;
