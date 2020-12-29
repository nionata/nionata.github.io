import { useCallback, useState } from 'react'

const useToggle = (init = false) => 
{
    const [value, setValue] = useState(init)

    const toggle = useCallback(() => {
        setValue(v => !v)
    }, [])

    return [value, toggle]
}

export default useToggle