import React, { useState } from 'react'

export default function ComponenState() {
  const [isSave, setIsSave] = useState(true)
  const [number, setNumber] = useState(0)

  const handelsave = () => {
    setIsSave((isSave) => (isSave = !isSave))
  }
  const handleplus = () => {
    setNumber((number) => (number += 1))
  }
  return (
    <div>
      <button onClick={handelsave}>{isSave ? 'save' : 'saved'}</button>
      {!isSave ? 'data sudah disave' : 'data belum disave'}

      <br />
      <button onClick={handleplus}>+</button>
      {number}
    </div>
  )
}
