import React from 'react';
import {Component} from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {DropdownButton, MenuItem} from 'react-bootstrap'

export default class Picker extends Component{

      render() {
        const { options, value, onChange } = this.props;
    
        return (
          <Select
            name="form-field-name"
            value={value}
            onChange={e => onChange(e.target.value)}
          >
          {
              options.map((item, i) =>(<option value = {item} key = {item}>{item}</option> ))
          }
          </Select>
        );
      }
    }