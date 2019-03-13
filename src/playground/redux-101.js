import { createStore } from "redux";

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const resetCount = () =>({
    type:'RESET'
})

// //1.reducer are pure function i.e not depend on other 
// //2.never change state or action

// let a=2;
// const add=(b)=>{
//     result=a+b;
// }
//  //above add is depend on a  hence it is not pure function

//  const add1=(a,b)=>{
//     result=a+b;
// }
// //now above function is pure function

const createReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count+action.incrementBy
        }

        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return{
            count: 0
        }
        default:
            return state;

    }
}
const store = createStore(createReducer);

//return function that unsubcribe the change listener
//store.subcribe() called whenever dispatch method is called
const unsubcribe=store.subscribe(()=>{
    console.log(store.getState());
});



store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount());

store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(decrementCount());
// console.log(store.getState());
