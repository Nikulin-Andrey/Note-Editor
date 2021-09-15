import React from 'react';
import TagsContainer from './TagsContainer';

export default function NoteInput(props) {

    return (
        <div className="note_input_container">
            <textarea value={props.noteText} onChange={props.onChange} />
            {props.showTags ? <TagsContainer tags={props.tags} /> : ' '}
        </div>
    )
}
