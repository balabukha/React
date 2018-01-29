import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

//CSS
import 'react-select/dist/react-select.css';
import '../style.css';


class Filtering extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedOption: '',
        };

    }


    render() {
    const {articles} = this.props;
        const options = articles.map(article => {
            return {
                label: article.title,
                value: article.id
            }
        });

        return (
            <div>
                <Select
                    name="Select"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    multi
                />
            </div>
        );
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
}

// Filtering.propTypes = {};

export default Filtering;
