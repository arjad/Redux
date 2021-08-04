import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function App() {

    var Count=useSelector(state=>state.Count)
        console.log("count=",Count)
        console.log(Count,"Count");
        var dispatch=useDispatch()
        console.log("dispatch=",dispatch)

    return (
        <div>
            app
            
            <h2>Count:{Count}</h2>
            <button onClick={()=>{dispatch({type:"Inc"})}}>+</button>
            <button onClick={()=>{dispatch({type:"Dec"})}}>-</button>

            app
        </div>
    )
}
