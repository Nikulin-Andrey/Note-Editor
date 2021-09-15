import React from 'react';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';

export default function Note(props) {
    return (
        <div className="note">
            <div className="note_header">
                <NoteEdit />
                <NoteDelete />
            </div>
            <p className="note_text">
                {props.text}
            </p>
        </div>
    )
}
