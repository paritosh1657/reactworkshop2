import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrementCount, incrementCount } from "./CountAction";

function CounterContainer(){

  const countValue= useSelector((state)=>state.count);
  const dispatchActions= useDispatch();
  return(
    <div>
      <h2>CounterContainer</h2>
      <h4>Count: {countValue}</h4>
      <button onClick={()=>dispatchActions(incrementCount())}>increment count</button>
      <button onClick={()=>dispatchActions(decrementCount())}>decrement count</button>
    </div>
  )
}
export default CounterContainer