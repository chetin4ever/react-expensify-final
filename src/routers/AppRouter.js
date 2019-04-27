import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter=()=>(
    <BrowserRouter>
        <div>

            <Header />

            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={Help} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
)
export default AppRouter;
