import React from 'react';
import SearchInput from './SearchInput';
import './CreatingNoteArea.scss';
import SearchButtons from './Buttons';

export default function SearchArea() {
    return (
        <div className="search_area">
            <SearchInput />
            <SearchButtons />
        </div>
    )
}
