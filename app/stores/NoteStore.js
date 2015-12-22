/**
 *
 * Created by Martin on 10.12.2015.
 */
import meteorflux from '../lib/Meteorflux';
import Notes from '../lib/NotesCollection';
import NoteActions from '../actions/NotesActions';

class NoteStore {
    constructor(){
        this.bindActions(NoteActions);
    }

    findall(){
        Notes.find();
    }

   create(task){

       if(task<0){
           return;
       }

       Notes.insert({
           task: task,
           createdAt: new Date()
       });

   }

    update(taskId,task){
        const note = notes.findOne(taskId);

        if(taskId<0){
            return;
        }

        Notes.update({
            _id: taskId,
            task: task,
            modifyAt: new Date()
        });
    }

    delete(taskId){
        Notes.remove(taskId)
    }
}

export default