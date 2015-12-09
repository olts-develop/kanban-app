import {Route,IndexRoute} from 'react-router';
import Kanban from './Kanban';

export default(
    <Route path="/" component={Kanban}>
        <IndexRoute component={Kanban}/>
    </Route>
)
