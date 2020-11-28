import React from 'react'
import useCounter from './../useCounter'

export default function Counter() {
  const [like, handleLike, handleTriple] = useCounter(0)
  return (
    <div>
      <p>
        <button onClick={handleLike}> Like </button>
        <span> {like} </span>
      </p>
      <p>
        <button onClick={handleTriple}> Triple Like</button>
        <span> {like}</span>
      </p>
    </div>
  )
}
