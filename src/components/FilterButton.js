import React from 'react';

export default function FilterButton(props) {
    return (
        <button
          className="ButtonReset"
          onClick={props.clickFilterButton}
        >
          {props.filterName}
        </button>
    );
}
