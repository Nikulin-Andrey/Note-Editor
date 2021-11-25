import React from 'react';
import Button from '../Button/Button';
import NoteContent from './NoteContent';
import NoteHeader from './NoteHeader';

export default function Note(props) {

    return (
        <div className="note">
            <NoteHeader
                id={props.id}
                editNote={props.editNote}
                deleteNote={props.deleteNote}
                edit={props.edit}
            />
            <NoteContent
                isEdit={props.edit}
                text={props.text}
                onEdit={props.onEdit}
                editableText={props.editableText}
            />
        </div>
    )
}
