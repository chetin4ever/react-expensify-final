import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

const ExpenseDashBoardPage = () =>(
    <div> this is epense ExpenseDashBoardPage</div>
)
const AddExpensePage=()=>(
    <div> this is expence add page</div>
)
const EditExpense=()=>(
    <div> this is edit expence page</div>
)
const Help=()=>(
    <div>
        this is help page
    </div>
)
const NotFoundPage=()=>(
    <div>404!</div>
)
const routes=(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/editExpense" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

  
ReactDOM.render(routes, document.getElementById("app"));
  
