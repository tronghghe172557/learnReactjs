import React from 'react'
import { useSelector } from 'react-redux'

function Counter2() {
    const counter = useSelector(state => state.counterReducer);

    console.log(counter)

  return (
    <div>Counter2: {counter}</div>
  )
}

export default Counter2