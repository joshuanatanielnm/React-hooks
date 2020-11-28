import { useState } from 'react'

function useCounter(defaultValue) {
  const [state, setState] = useState(defaultValue)
  const handleCounter = () => {
    setState((currentState) => currentState + 1)
  }
  const handleTriple = () => {
    handleCounter()
    handleCounter()
    handleCounter()
  }

  return [state, handleCounter, handleTriple]
}

export default useCounter
