import React, { useState } from 'react';
import NoteInput from './NoteInput';
import './CreatingNoteArea.scss';
import Buttons from './Buttons';

export default function CreatingNoteArea(props) {

    return (
        <div className="creating_area">
            <NoteInput
                tags={props.tags}
                noteText={props.noteText}
                onChange={props.changeNoteText}
                showTags={false}
            />
            <Buttons onClick={props.addNewNote} />
        </div>
    )
}
