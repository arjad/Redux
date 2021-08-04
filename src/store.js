import { createStore } from "redux"
import countReducer from './reducer'

let CountState=
{
    Count:0,
}

const store=createStore(countReducer,CountState)

export default store
