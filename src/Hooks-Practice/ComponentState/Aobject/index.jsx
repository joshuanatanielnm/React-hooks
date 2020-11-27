import React, { useState, useEffect } from 'react'

export default function Aobject() {
  const [Todo, setTodo] = useState([
    { text: 'Persiapan slide' },
    { text: 'Persiapan Praktikum' },
  ])

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('My First Effect')
  })

  useEffect(() => {
    console.log(`changes ${value}`)
  }, [value])
  const addValueToTodo = () => {
    if (value.trim().length > 0) {
      setTodo((prevTodo) => [...prevTodo, { text: value }])
      setValue('')
    }
  }
  return (
    <div>
      <ul>
        {Todo.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <input
        type='text'
        value={value}
        onChange={(v) => setValue(v.target.value)}
        className='border-2'
      />
      <button onClick={addValueToTodo}>Add</button>
    </div>
  )
}
