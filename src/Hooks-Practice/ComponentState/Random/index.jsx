import React, { useState } from 'react'

const Random = () => {
  const [count1, setCount] = useState()
  return (
    <div>
      <button
        onClick={() => {
          setCount((a) => ({ ...a, count1: a.count1 + 1 }))
        }}
      >
        +
      </button>
      <br />
      <div>This is Count2 : {count1}</div>
    </div>
  )
}
export default Random
