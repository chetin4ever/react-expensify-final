import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary= ({expenseCount,expenseTotal})=>{
    const expenseWord = expenseCount=== 1 ? 'expense' : 'expenses';
    console.log(expenseTotal);
    const formattedExpensesTotal=numeral(expenseTotal).format('$0,0.00');

    return(
        <div>
            <h1>
                veiwing {expenseCount}{expenseWord} totalling {formattedExpensesTotal}
            </h1>
        </div>
    );
};
const mapStateToProps=(state)=>{
    const visibleExpenses= selectExpenses(state.expenses,state.filters);

    return{
        expenseCount:visibleExpenses.length,
        expenseTotal:selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);
