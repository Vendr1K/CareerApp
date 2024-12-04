import { ButtonProps } from '@props'

import cn from 'classnames'
import styles from './button.module.css'

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.btn, className)} {...props}>
      {children}
    </button>
  )
}
