import React, { useEffect, useState } from 'react'

export default function Calculator() {
  const [value, setValue] = useState('')
  const numBtns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'CR']
  const Operator = ['+', '-', '*', '/', '=']

  return (
    <div>
    <h1 className="text-yellow-500 flex justify-center text-3xl mt-20">Simple Calculator</h1>
      <div className='flex justify-center text-3xl'>
        <div className='w-64 mt-5  border-2 p-5 rounded-lg'>
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
              className='bg-blue-300 rounded-lg cursor-pointer hover:bg-blue-400 col-span-1'
              value={oprt} key={oprt}
              onClick={(e) => oprt === '=' ? setValue(String(eval(value))) : setValue(value + e.target.value)}
            >
            {oprt}
            </button> )
          }
          </div>
        </div>
      </div>
    </div>
  )
}
