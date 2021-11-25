import React from 'react';
import NoteInput from './NoteInput';
import './CreatingNoteArea.scss';
import Button from '../Button/Button';

export default class CreatingNoteArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="creating_area">
                <NoteInput
                    tags={this.props.tags}
                    noteText={this.props.noteText}
                    onChange={this.props.changeNoteText}
                    showTags={false}
                />
                <div className="buttons">
                    <Button
                        className="add"
                        onClick={this.props.addNewNote}
                        value="Add"
                    />
                    <Button
                        className="filter"
                        onClick={() => console.log("filter")}
                        value="Filter"
                    />
                </div>
            </div>
        )
    }
}