import { useMemo, useState } from "react"

function Counter(){
  const [counterOne, setCounterOne]= useState(0);
  const [counterTwo, setCounterTwo]= useState(0);

  const incrementOne= ()=>{
    setCounterOne(counterOne +1);
  }

  const incrementTwo= ()=>{
    setCounterTwo(counterTwo +1);
  }

 const isEven= useMemo(()=>{
  let i=0;
  while(i<200000000) i++;
  return counterOne %2===0;
 }, [counterOne])

  return (
    <>
    <h2>Use Memo</h2>
    <div>
      <h4>count: {counterOne}</h4>
      <button onClick={incrementOne}>Increment One</button>
    </div>
    <span>
      {
        isEven? "even": "odd"
      }
    </span>
    <div>
      <h4>count: {counterTwo}</h4>
      <button onClick={incrementTwo}>Increment Two</button>
    </div>
    </>
  )
}
export default Counter