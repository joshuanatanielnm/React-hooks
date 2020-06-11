import React, { useState } from 'react'

export default function Object() {
  const [list, setList] = useState([
    { text: 'test' },
  ])
  const [value, setValue] = useState('')
  const addValueToList = () => {
    if (value.trim().length > 0) {
      setList(prevList => [...prevList, { text: value }])
      setValue('')
    }
  }
  return (
    <div>
      <ul>
        {list.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <input
        type='text'
        value={value}
        onChange={v => setValue(v.target.value)}
      />
      <button onClick={addValueToList}>Add</button>
    </div>
  )
}
