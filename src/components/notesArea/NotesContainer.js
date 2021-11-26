import React, { useState } from 'react';
import './NotesContainer.scss';
import Note from './Note';

// лучше было создать отдельный компонент, потом так и сделаю, но контекст попробова)
export const ThemeContext = React.createContext('light');


export default function NotesContainer({ notes, deleteNote, editInfo }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
            <div className="notes_container">
                {notes.map(note =>
                    <Note 
                        key={note.id}
                        noteInfo={note}
                        deleteNote={deleteNote}
                        editInfo={editInfo}
                    />
                )}
            </div>
        </ThemeContext.Provider>

    )
}
