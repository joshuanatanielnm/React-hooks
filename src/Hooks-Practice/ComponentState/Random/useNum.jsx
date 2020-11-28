import { useEffect, useState } from 'react'

export const useNum = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const inrement = (recent) => setValue((recent) => recent + 1)
  return [value, inrement]
}
