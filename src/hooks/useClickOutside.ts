import { Nullable } from '@/types'
import { useEffect } from 'react'

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>
  callback: () => void
  isActive?: boolean
  parentPortalRef?: Nullable<React.RefObject<HTMLElement>>
}

export const useClickOutside = ({
  ref,
  callback,
  isActive = true,
  parentPortalRef
}: UseClickOutsideProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      !isActive ||
      (parentPortalRef?.current &&
        parentPortalRef?.current.contains(event.target as Node))
    )
      return
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
