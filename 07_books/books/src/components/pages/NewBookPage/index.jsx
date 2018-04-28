import React, { Component } from 'react';
import { Segment } from "semantic-ui-react";

import SearchBookForm from "../../forms/SearchBookForm";

export default class NewBookPage extends Component {
    state = {
        book: null
    }
    render() {
        return (
            <Segment>
                <h1>Add a new biik to your collection</h1>
                <SearchBookForm />
            </Segment>
        )
    }
}
