import { forwardRef } from 'react'

import { DropdownProps } from '@props'

import cn from 'classnames'

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, children }, ref) => {
    return (
      <div className={cn(className)} ref={ref}>
        {children}
      </div>
    )
  }
)

Dropdown.displayName = 'Dropdown'
