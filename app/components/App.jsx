import {Component} from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';
import {Button,Glyph} from 'elemental';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <Button className="add-note" size="xs" onClick={this.addNote}>+</Button>

                <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
            </div>
        );
    }

    deleteNote = (id) => {
        const notes = this.state.notes;

        const noteIndex = this.findNote(id);

        if(noteIndex <0){
            return;
        }

        this.setState({
            notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
        });

    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }

    editNote = (id, task) => {
       const notes = this.state.notes;
       const noteIndex = this.findNote(id);

        if(noteIndex < 0){
            return;
        }

        notes[noteIndex].task = task;

        this.setState({notes});
    }

    findNote = (id) => {
        const notes = this.state.notes;
        const noteIndex = notes.findIndex((note) => note.id === id);

        if(noteIndex < 0){
            console.warn('Failed to find note', notes, id);
        }

        return noteIndex;
    }

}