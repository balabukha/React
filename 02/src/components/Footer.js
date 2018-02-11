import React from 'react';
import FilterLink from './FilterLink'

export default function Footer(){
    return (
        <div>
            <FilterLink filter="All" title="All" />
            <FilterLink filter="Completed" title="Completed"/>
            <FilterLink filter="New" title="New"/>
        </div>

    )
}