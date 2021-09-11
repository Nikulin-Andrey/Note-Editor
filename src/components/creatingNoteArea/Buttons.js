import React from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonFilter from './ButtonFilter';

export default function SearchButtons() {
    return (
        <div className="search_buttons">
            <ButtonAdd />
            <ButtonFilter />
        </div>
    )
}
