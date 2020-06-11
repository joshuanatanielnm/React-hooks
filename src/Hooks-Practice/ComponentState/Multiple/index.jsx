import React, { useState } from 'react'

export default function Multiple() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(1)
  return (
    <div>
      <p>You clicked {countA} times</p>
      <button onClick={() => setCountA(countA + 1)}>Click A</button>
      <p>You clicked {countB} times</p>
      <button onClick={() => setCountB(countB + 1)}>Click B</button>
    </div>
  )
}
