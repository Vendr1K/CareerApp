import { useEffect } from 'react'

interface UseKeyPressrops {
  mainKey: string
  callback: () => void
  isActive?: boolean
}

export const useKeyPress = ({
  mainKey,
  callback,
  isActive
}: UseKeyPressrops) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive || event.repeat) {
        return
      }
      if (event.key === mainKey) {
        event.preventDefault()
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, isActive])
}
