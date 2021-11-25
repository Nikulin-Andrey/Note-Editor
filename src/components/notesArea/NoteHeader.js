import React from 'react';
import Button from '../Button/Button';

export default function NoteHeader(props) {
    return (
        <div className="note_header">
            <Button
                id={props.id}
                onClick={props.editNote}
                className="note_edit"
                value={props.edit ? "Save" : "Edit"}
            />
            <Button
                id={props.id}
                onClick={props.deleteNote}
                className="note_delete"
                value="Delete"
            />
        </div>
    )
}
