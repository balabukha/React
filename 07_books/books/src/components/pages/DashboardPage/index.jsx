import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../../../components/messages/ConfirmEmailMessage'
import AddBookCta from "../ctas/AddBookCta";
import {allBooksSelector} from "../../../Reducer/books"

const DashboardPage = ({isConfirmed, books}) => (
    <div>
        {!isConfirmed && <ConfirmEmailMessage /> }
        { books.length === 0 && <AddBookCta/>}
    </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return {
        isConfirmed: !!state.user.confirmed,
        books: allBooksSelector(state)
    }
}

export default connect(mapStateToProps)(DashboardPage)
