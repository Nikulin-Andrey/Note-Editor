import React from 'react';
import NoteInput from './NoteInput';
import './CreatingNoteArea.scss';
import Button from '../Button/Button';

export default class CreatingNoteArea extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('mount')
    }

    componentDidUpdate() {
        console.log(this.props)

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps, nextContext);
    //     return nextProps.noteText[nextProps.noteText.length - 1] !== '#';
    // }
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
