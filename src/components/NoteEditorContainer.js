import React from 'react';
import SearchArea from './creatingNoteArea/CreatingNoteArea';
import NotesContainer from './notesArea/NotesContainer';
import './NoteEditorContainer.scss';

export default function NoteEditorContainer() {
    return (
        <div className="container">
            <SearchArea />
            <NotesContainer />
        </div>
    )
}
