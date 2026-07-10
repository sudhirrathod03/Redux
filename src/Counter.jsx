import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counters/counterSlice.js'

function Counter() {
const count = useSelector((state)=>state.counters)


const dispatch = useDispatch()
  return (
    <div>
        {count.counter}
     <button onClick={()=>dispatch(increment())}>Incrment: </button>
     <button onClick={()=>dispatch(decrement())}>decrement: </button>
     <button onClick={()=>dispatch(incrementByAmount(34))}>Add value: </button>
    </div>
  )
}

export default Counter
