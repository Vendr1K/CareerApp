import { forwardRef } from 'react';

export const Dropdown = forwardRef((props, ref) => {
  const { className, children } = props
  return (
    <div className={`${className ?? ''}`} ref={ref}>
      {children}
    </div>
  )
})

