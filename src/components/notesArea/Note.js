import React from 'react';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';

export default function Note() {
    return (
        <div className="note">
            <div className="note_header">
                <NoteEdit />
                <NoteDelete />
            </div>
            <p className="note_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolor pariatur eius vitae provident quaerat
                voluptatum ex blanditiis voluptatibus laborum aut fugit culpa, quae doloribus. Saepe recusandae nostrum, repellendus
                magnam beatae sint alias laborum reprehenderit laudantium?
            </p>
        </div>
    )
}
