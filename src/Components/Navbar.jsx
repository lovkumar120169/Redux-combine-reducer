import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoFunction, reduceTodoFunction } from '../Redux/CounterReducer/action'

export const Navbar = () => {
  const counter=useSelector((store)=>store.CounterReducer.counter)
  const dispatch=useDispatch()


  const addfuncounter=()=>{
    dispatch(addTodoFunction())
  }

  const reducefuncounter=()=>{
    dispatch(reduceTodoFunction())
  }

  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",  padding: "5px", marginBottom: "20px", backgroundColor: "#233142", color: "white",display:"flex",alignItems:"center",justifyContent:"space-around" }}>
      <div>
        <h1>Redux Todo</h1>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",gap:"100px"}}>
        <h1>Counter: {counter}</h1>
        <div style={{display:"flex",gap:"20px"}}>
          <button onClick={addfuncounter} style={{color:"white",fontSize:"16px",fontWeight:"600",backgroundColor:"#42b883",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"}}>+</button>
          <button onClick={reducefuncounter} style={{color:"white",fontSize:"16px",fontWeight:"600",backgroundColor:"#42b883",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"}}>-</button>
        </div>
      </div>
    </div>
  )
}
