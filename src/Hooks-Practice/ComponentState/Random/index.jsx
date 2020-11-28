import React from 'react'
import { useForm } from './useForm'
import { useNum } from './useNum'

const Random = () => {
  const [value, handleChanges] = useForm({ email: '', passwword: '' })
  const [number, handleNumber] = useNum(0)

  return (
    <div>
      <>
        <input
          type='text'
          name='email'
          value={value.email}
          onChange={handleChanges}
          className='border-4 border-opacity-100 border-light-blue-500'
        />
        <br />
        <input
          type='password'
          name='password'
          value={value.password}
          onChange={handleChanges}
          className='border-4 border-opacity-100 border-light-blue-500'
        />
        <br />

        {number}

        <button onClick={handleNumber}>Click this shit</button>
      </>
    </div>
  )
}
export default Random
