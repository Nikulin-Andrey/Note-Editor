import React from 'react';
import './NotesContainer.scss'; 
import Note from './Note';

export default function NotesContainer(props) {
    const notes = props.notes;

    return (
        <div className="notes_container">
            {notes.map(note => 
                <Note key={note.id} text={note.text} />
            )}
        </div>
    )
}
