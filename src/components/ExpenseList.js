import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpences from '../selectors/expenses';
const ExpenseList =(props) =>(
    <div>
        <h1>Expense list</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key= {expense.id}{...expense}/>;
        })}
    </div>
);
const mapStateToProps = (state) =>{
    return{
        expenses : selectExpences(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);