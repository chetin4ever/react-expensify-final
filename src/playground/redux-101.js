import { createStore } from "redux";

const store = createStore((state={count:0},action)=>{
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count+incrementBy
        }
        case 'DECREMENT':
        return{
            count: state.count - decrementBy
        }
        case 'RESET':
        return{
            count: 0
        }
        default:
            return state;

    }
});

//return function that unsubcribe the change listener
//store.subcribe() called whenever dispatch method is called
const unsubcribe=store.subscribe(()=>{
    console.log(store.getState());
});



store.dispatch({
    type:'INCREMENT',
    incrementBy:5
});
store.dispatch({
    type:'INCREMENT'
});
//unsubcribe();
store.dispatch({
    type:'DECREMENT'
});
store.dispatch({
    type:'RESET'
});
store.dispatch({
    type:'INCREMENT'
});
store.dispatch({
    type:'DECREMENT'
});
store.dispatch({
    type:'DECREMENT',
    decrementBy:10
});
// console.log(store.getState());
