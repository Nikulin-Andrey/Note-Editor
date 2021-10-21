import React from 'react';
import Button from '../Button/Button';
import NoteContent from './NoteContent';

export default function Note(props) {

    return (
        <div className="note">
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
            <NoteContent
                isEdit={props.edit}
                text={props.text}
                onEdit={props.onEdit}
                editableText={props.editableText}
            />
        </div>
    )
}
