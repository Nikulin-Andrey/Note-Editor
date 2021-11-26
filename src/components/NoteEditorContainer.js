import React, { useState, useEffect } from 'react';
import CreatingNoteArea from './creatingNoteArea/CreatingNoteArea';
import NotesContainer from './notesArea/NotesContainer';
import './NoteEditorContainer.scss';
import withFetch from './HOC/withFetch';

function NoteEditorContainer({fetchData}) {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState('');
    const [lastId, setLastId] = useState(0); // использую для добавления нового уникального ID заметке
    const [editId, setEditId] = useState(-1); // чтобы знать какая заметка сейчас редактируется
    const [editableNoteText, setEditableNoteText] = useState('');

    useEffect(() => {
        const getNotes = async () => {
            const serverNotes = await fetchData('http://localhost:5000/notes');
            setNotes(serverNotes);
            const indexOfLanstNote = serverNotes.length - 1;
            setLastId(serverNotes[indexOfLanstNote].id);
        }

        getNotes();
    }, []);

    function changeNewNoteText(e) {
        setNewNoteText(e.target.value);
    }

    async function addNewNote() {
        const newNote = {
            text: newNoteText,
            tags: [],
            id: lastId + 1
        };
        await fetchData('http://localhost:5000/notes', 'POST', '', newNote);
        setLastId(lastId + 1);
        setNotes([...notes, newNote]);
        setNewNoteText('');
    }

    async function deleteNote(e) {
        const newNotes = notes.filter(note => note.id !== Number(e.target.id));
        await fetchData('http://localhost:5000/notes', 'DELETE', `/${e.target.id}`);
        setNotes(newNotes);
        setEditId(-1);
    }

    function changeEditableNoteText(e) {
        setEditableNoteText(e.target.value);
    }

    async function saveNote(id, text) {
        let newNotes = [...notes];
        const indexEdit = newNotes.findIndex(note => note.id === id);
        const editableNote = {
            text: text,
            tags: [],
            id: id
        };
        await fetchData('http://localhost:5000/notes/', 'PUT', id, editableNote);
        newNotes.splice(indexEdit, 1, editableNote);
        setNotes(newNotes);
    }

    function editNote(e) {
        if (editId === Number(e.target.id)) {
            setEditId(-1);
            saveNote(editId, editableNoteText);
        } else {
            if (editId !== -1) {
                saveNote(editId, editableNoteText);
            }
            setEditId(Number(e.target.id));
            const notEditableNoteText = notes.find(note => note.id === Number(e.target.id)).text;
            setEditableNoteText(notEditableNoteText);
        }
    }

    let editInfo = {
        onEdit: changeEditableNoteText,
        editNote: editNote,
        editId: editId,
        editableNoteText: editableNoteText
    }

    return (
        <div className="container">
            <CreatingNoteArea
                addNewNote={addNewNote}
                changeNoteText={changeNewNoteText}
                noteText={newNoteText}
            />
            <NotesContainer
                notes={notes}
                deleteNote={deleteNote}
                editInfo={editInfo}
            />
        </div>
    )
}

export default withFetch(NoteEditorContainer);
