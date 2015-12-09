import {Component} from 'react';
import {Form,FormField,FormInput,Button,Glyph} from 'elemental';

export default class Note extends Component{
    constructor(props){
        super(props);

        this.state = {
            editing: false
        };
    }

    render(){
        const editing =this.state.editing;

        return(
            <div>
                {editing ? this.renderEdit() : this.renderTask()}
            </div>
            );
    }

    renderEdit= () =>{
        return(
                <Form>
                  <FormField>
                    <FormInput
                        type="text"
                        size="lg"
                        autofocus={true}
                        defaultValue={this.props.task}
                        onBlur={this.finishEdit}
                        onKeyPress={this.checkEnter}>
                    </FormInput>
                  </FormField>
                </Form>
        )
    };

    renderTask = ()=> {
        const onDelete = this.props.onDelete;

        return <div onClick={this.edit}>
            <span className="task"> {this.props.task}</span>
            {onDelete ? this.renderDelete() : null}
        </div>;
    }

    edit = () => {
        this.setState({
            editing: true
        });
    }

    checkEnter = (e) => {
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }

    finishEdit = (e) =>{
        this.props.onEdit(e.target.value);

        this.setState({
            editing: false
        });
    }

    renderDelete = () => {
        return(
            <Button className="delete" size="xs" onClick={this.props.onDelete}>x</Button>
        );

    }
}