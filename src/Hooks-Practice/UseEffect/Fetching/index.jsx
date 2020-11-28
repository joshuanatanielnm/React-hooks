import React, { useEffect, useState } from 'react'

import Perc from './Perc'
import useFetch from './useFetch'

export default function Fetching() {
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  )
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  console.log(localStorage.getItem('count'))

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  const handleToggle = () => {
    setToggle((e) => !e)
  }
  return (
    <div>
      {toggle && <Perc />}
      <button onClick={handleToggle}>Click me</button>
      <br />
      <br />
      {loading ? 'loading....' : data}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Trivia</button>
    </div>
  )
}
