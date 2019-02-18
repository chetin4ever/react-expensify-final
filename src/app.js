import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';
import {BrowserRouter,Route} from 'react-router-dom';

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
const routes=(
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/editExpense" component={EditExpense}/>
            <Route path="/help" component={Help}/>
        </div>
        
    </BrowserRouter>
);

  
ReactDOM.render(routes, document.getElementById("app"));
  
