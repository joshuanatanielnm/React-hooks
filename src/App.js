import './Style/main.css'

import Aobject from 'Hooks-Practice/ComponentState/Aobject'
import Calculator from 'Hooks-Practice/ComponentState/Calculator'
import Counter from 'Hooks-Practice/ComponentState/CustomHook/Counter'
import Fetching from 'Hooks-Practice/UseEffect/Fetching'
import Multiple from 'Hooks-Practice/ComponentState/Multiple'
import MyFunc from 'Hooks-Practice/UseEffect/MyFunc'
import Random from 'Hooks-Practice/ComponentState/Random'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Fetching />
    </div>
  )
}

export default App
