import {Component} from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';
import {Button,Glyph} from 'elemental';
import NoteStore from '../store/NoteStore';
import NoteActions from '../actions/NoteActions';


export default class App extends React.Component {
    constructor(props) {
        super(props);

       this.state = NoteStore.getState();
    }
    componentDidMount(){
        NoteStore.listen(this.storeChanged);
    }
    componentWillUnmount(){
        NoteStore.unlisten(this.storeChanged);
    }

    storeChanged = (state) => {
        // Without a property initializer `this` wouldn't
        // point at the right context (defaults to `window`).
        this.setState(state);
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

    addNote(){
        NoteActions.create({task: 'New task'});
    }

    editNote(id,task){
        NoteActions.update({id,task});
    }

    deleteNote(id){
        NoteActions.delete(id);
    }

}