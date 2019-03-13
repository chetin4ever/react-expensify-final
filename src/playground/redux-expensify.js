import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//add expences
//remove expences
//edit expence
//set text-filter
//sort by date
//sort by amount
//set start date
//set end date
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
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
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
        default:
            return state;
    }
};

const filterReducerDefaultState={
    text:'some text', 
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
};

const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer

    })
)

store.subscribe(()=>{
    console.log(store.getState());
});

const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}));
const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:300}));

store.dispatch(removeExpense({id:expenseOne.expense.id}));
store.dispatch(removeExpense({id:expenseTwo.expense.id}));


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