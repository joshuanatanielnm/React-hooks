import 'Style/Style.scss'

import React, { useState } from 'react'

export default function Calculator() {
  const [value, setValue] = useState('')
  const numBtns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'CR']
  const Operator = ['+', '-', '*', '/', '=']

  return (
    <div className='flex justify-center text-3xl'>
      <div className='w-64 mt-20'>
        <input
          type='text'
          className='border-solid border-2 border-gray-600 w-full h-20 rounded-lg p-4'
          readOnly
          value={value}
        />
        <div className='grid grid-cols-4 grid-rows-4 text-center gap-2 mt-4'>
        {
          numBtns.map(numb => <button
            className='bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'
            onClick={(e) => numb === 'CR' ? setValue(''):setValue(value + e.target.value)}
            value={numb} key={numb}
          >
          {numb}
          </button>)
        }
        {
          Operator.map(oprt => <button
            className='bg-blue-200 rounded-lg cursor-pointer hover:bg-blue-300 col-span-1'
            value={oprt} key={oprt}
            onClick={(e) => oprt === '=' ? setValue(String(eval(value))) :setValue(value + e.target.value)}
          >
          {oprt}
          </button> )
        }

        </div>
      </div>
    </div>
  )
}
