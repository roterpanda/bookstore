import React from 'react';
import './FilterPanel.css';

const FilterPanel = (props) => {
    return (
        <div>
            <input type='search' onChange={props.searchEvent} className='searchField' />
        </div>
    )
}

export default FilterPanel;