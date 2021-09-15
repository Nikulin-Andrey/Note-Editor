import React, { useState, useEffect } from 'react';
import CreatingNoteArea from './creatingNoteArea/CreatingNoteArea';
import NotesContainer from './notesArea/NotesContainer';
import './NoteEditorContainer.scss';

export default function NoteEditorContainer() {

    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState(' ');

    useEffect(() => {
        const getNotesAndTags = async () => {
            const serverNotesAndTags = await fetchData('http://localhost:5000/notes-tags');
            setNotes(serverNotesAndTags.notes);
            setTags(serverNotesAndTags.tags);
        }

        getNotesAndTags();
    }, []);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    function changeNoteText(e) {
        setNewNoteText(e.target.value);
    }

    function addNewNote() {
        const newNote = {
            text: newNoteText,
            tags: [],
            id: notes.length + 2
        };
        console.log(newNote)
        setNotes([...notes, newNote]);
    }

    return (
        <div className="container">
            <CreatingNoteArea
                tags={tags}
                addNewNote={addNewNote}
                changeNoteText={changeNoteText}
                noteText={newNoteText}
            />
            <NotesContainer notes={notes} />
        </div>
    )
}
