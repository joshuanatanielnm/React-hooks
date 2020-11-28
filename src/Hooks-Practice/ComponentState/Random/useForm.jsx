import { useEffect, useState } from 'react'

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    console.log('triggered' + value + value.target)
  }, [value])

  return [
    value,
    (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      })
    },
  ]
}
