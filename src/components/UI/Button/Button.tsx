import { ButtonProps } from '@props'

import cn from 'classnames'
import styles from './button.module.css'

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(className, styles.button)} {...props}>
      {children}
    </button>
  )
}
