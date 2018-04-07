import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) => {
    console.log(text);
    return (
    <span style={{color: '#912d45'}}>{text}</span>
)}

InlineError.propTypes = {
    text: PropTypes.string.isRequired
  };

export default InlineError;