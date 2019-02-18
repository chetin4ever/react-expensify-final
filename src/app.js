import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

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
    <div>404!-<Link to="/">Go home</Link></div>
)
const Header=()=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashborad</NavLink>
        <NavLink to="/create" activeClassName="is-active" >Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" >Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help</NavLink>

    </header>
)
const routes=(
    <BrowserRouter>
        <div>

        <Header/>

        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
        
    </BrowserRouter>
);

  
ReactDOM.render(routes, document.getElementById("app"));
  
