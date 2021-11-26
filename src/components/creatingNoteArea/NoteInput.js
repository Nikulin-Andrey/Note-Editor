import React from 'react';

export default function NoteInput(props) {

    return (
        <div className="note_input_container">
            <textarea value={props.noteText} onChange={props.onChange} />
        </div>
    )
}
