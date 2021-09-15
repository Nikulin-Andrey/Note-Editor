import React from 'react';

export default function Buttons(props) {
    return (
        <div className="buttons">
            <div className="add" onClick={props.onClick}>
                Add
            </div>            
            <div className="filter">
                Filter
            </div>
        </div>
    )
}
