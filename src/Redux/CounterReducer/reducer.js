import { get_local_storage, set_local_storage } from "../../Utils/localStorage"
import { ADD, REDUCE } from "./actionType"



const initState={
    counter:get_local_storage("count") || 0
}

export const CounterReducer=(state=initState,{type})=>{
    switch(type){
        case ADD:
            set_local_storage("count",state.counter+1)
            return { ...state, counter:state.counter+1 }
        case REDUCE: 
            set_local_storage("count",state.counter-1)
            return {...state, counter:state.counter-1}
        default:
            return state
    }
}