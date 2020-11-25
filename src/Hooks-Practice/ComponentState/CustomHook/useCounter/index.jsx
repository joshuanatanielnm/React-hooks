import React, { useState } from 'react'

export default function useCounter(defaultValue){
  const [state, setState] = useState(defaultValue);
  const handleCounter = () => {
    setState(currentState => currentState + 1)
  }
  const handleTriple = () => {
    handleCounter();
    handleCounter();
    handleCounter();
  };

  return [
    state,
    handleCounter,
    handleTriple
  ]
}
