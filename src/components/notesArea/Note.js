import React from 'react';
import NoteContent from './NoteContent';
import NoteHeader from './NoteHeader';

export default function Note({noteInfo, deleteNote, editInfo}) {
    let isEdit = noteInfo.id === editInfo.editId;

    return (
        <div className="note">
            <NoteHeader
                id={noteInfo.id}
                editNote={editInfo.editNote}
                deleteNote={deleteNote}
                edit={isEdit}

            />
            <NoteContent
                isEdit={isEdit}
                text={noteInfo.text}
                onEdit={editInfo.onEdit}
                editableText={editInfo.editableNoteText}
            />
        </div>
    )
}
