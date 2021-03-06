import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//add expences
const addExpense =(
    {
        description='',
        note='',        
        amount=0, 
        createdAt=0
    }= {}
    )=>({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//remove expences
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

//edit expence
const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id
});
//set text-filter
const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
})
//sort by amount
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT' 
})
//sort by date
const sortByDate=()=>({
    type:'SORT_BY_DATE'
})
//set start date
const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
//set end date
const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})
const expenseReducerDefaultState=[];
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]; 
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                   return{
                       ...expense,
                       ...action.updates
                   } 
                }
            })
        default:
            return state;
    }
};

const filterReducerDefaultState={
    text:'', 
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate 
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }     
        default:
            return state;
    }
};
//Get visible expenses
const getVisibleExpenses=(expenses,{ text,sortBy,startDate,endDate })=>{
    return expenses.filter((expense)=>{
        // console.log('ST:'+startDate);
        // console.log('ED:'+expense.createdAt);
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt>=startDate;
        const endDateMatch= typeof startDate !='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1;            
        }else if(sortBy==='amount'){
            return a.amount<b.amount ? 1 : -1;
        }
    });
}

//store creation
const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer

    })
)
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);

});

//  const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100, createdAt:-21000}));
//  const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:30, createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));
const demoState={
    expenses:[{
        id:'xyz',
        description:'March rent',
        note:'this is the final rent ',
        amount:4500,
        createdAt:0 
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

//spreading object
// const user={
//     name:'che',
//     age:30
// }

// console.log({
//     ...user
// });