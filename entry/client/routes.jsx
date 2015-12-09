import {Route} from 'react-router';

import KanbanRoutes from './../../app/routes';

ReactRouterSSR.Run(
    <Route>
        {KanbanRoutes}
    </Route>
);