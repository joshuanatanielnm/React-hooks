import React, { useState } from 'react'

export default function Form() {
  const [value, setValue] = useState('world')
  return (
    <div>
      <p>Hello, {value}!</p>
      <input
        type='text'
        value={value}
        onChange={v => setValue(v.target.value)}
      />
    </div>
  )
}
