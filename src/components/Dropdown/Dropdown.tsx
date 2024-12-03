import { forwardRef } from 'react'
import { DropdownProps } from './Dropdown.props'

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const { className, children } = props
    return (
      <div className={`${className ?? ''}`} ref={ref}>
        {children}
      </div>
    )
  }
)

Dropdown.displayName = 'Dropdown'
