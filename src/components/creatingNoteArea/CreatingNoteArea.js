import React from 'react';
import NoteInput from './NoteInput';
import './CreatingNoteArea.scss';
import Button from '../Button/Button';

export default function CreatingNoteArea(props) {

    return (
        <div className="creating_area">
            <NoteInput
                tags={props.tags}
                noteText={props.noteText}
                onChange={props.changeNoteText}
                showTags={false}
            />
            <div className="buttons">
                <Button
                    className="add"
                    onClick={props.addNewNote}
                    value="Add"
                />
                <Button
                    className="filter"
                    onClick={() => console.log("filter")}
                    value="Filter"
                />
            </div>
        </div>
    )
}
