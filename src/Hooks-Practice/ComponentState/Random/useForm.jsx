import { usestate } from 'react'

export const useForm = (initialValue) => {
  const [value, setValue] = usestate(initialValue)

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
