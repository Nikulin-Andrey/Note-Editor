import React from 'react'
import NoteInput from '../creatingNoteArea/NoteInput'

export default function NoteContent(props) {
    return (
        <div className="note_content">
            {
                props.isEdit ?
                    <NoteInput
                        noteText={props.editableText}
                        onChange={props.onEdit}
                        showTags={false}
                    />
                    :
                    <p className="note_text">
                        {props.text}
                    </p>
            }
        </div>
    )
}
