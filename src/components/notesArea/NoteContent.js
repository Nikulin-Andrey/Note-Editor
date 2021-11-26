import React from 'react';
import NoteInput from '../creatingNoteArea/NoteInput';
import { ThemeContext } from './NotesContainer';


export default function NoteContent(props) {

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`note_content ${theme}`} >
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
            )}
        </ThemeContext.Consumer>   
        
    )
}
