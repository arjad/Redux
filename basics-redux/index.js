const redux = require("redux")
const createstore= redux.createStore;

//action
const action_name={
    type:"BUYBOOK",
    info:"my first redux"
}
//----------

function ret_act(){
    return action_name;
}

//reducer
const initailStates={
    numberOfBooks :10
}
const Reducer_name =(state=initailStates,action_name)=>{
    switch(action_name.type){
        case "BUYBOOK": return{
            ...state,  //clone state value
            numberOfBooks :state.numberOfBooks-1
        }
        default : return state
    }
}
//-------

//store
const store= redux.createStore(Reducer_name)
console.log("old value",store.getState());
//---- 

store.subscribe(()=>{
    console.log("updated state value",store.getState());
});

store.dispatch(ret_act());
store.dispatch(ret_act());