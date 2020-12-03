import React, { useEffect, useref } from 'react'

export default function Perc() {
  const renders = useref(0)

  console.log(`Hello renders ${renders.current++}`)
  useEffect(() => {
    console.log('mount')

    return () => console.log('unmonth')
  }, [])
  return <div>Hello This is try</div>
}
