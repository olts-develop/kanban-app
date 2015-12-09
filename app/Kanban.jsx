/**
 * Created by Martin on 08.12.2015.
 */
import './main.css';
import {Component} from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import 'array.prototype.findindex';

export default class Kanban extends Component {

    render (){
        return(
            <div>
                <App />
            </div>
        );
    }
}