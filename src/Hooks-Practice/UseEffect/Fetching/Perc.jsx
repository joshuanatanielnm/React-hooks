import React, { useEffect } from 'react'

export default function Perc() {
  useEffect(() => {
    console.log('mount')

    return () => console.log('unmonth')
  }, [])
  return <div>Hello This is try</div>
}
