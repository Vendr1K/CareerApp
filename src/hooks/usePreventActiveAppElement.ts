import { useEffect } from 'react'

export const usePreventActiveAppElement = () => {
  useEffect(() => {
    const handleBlur = () => {
      const activeElement = document.activeElement as HTMLElement
      if (
        activeElement &&
        !['input', 'textarea'].includes(activeElement.tagName.toLowerCase()) &&
        !activeElement.hasAttribute('contenteditable') &&
        typeof activeElement.blur === 'function'
      ) {
        activeElement.blur()
      }
    }
    window.addEventListener('mouseup', handleBlur)
    window.addEventListener('dragend', handleBlur)

    return () => {
      window.removeEventListener('mouseup', handleBlur)
      window.removeEventListener('dragend', handleBlur)
    }
  }, [])
}
