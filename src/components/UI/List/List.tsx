import { ListProps } from '@props'

import cn from 'classnames'
import styles from './list.module.css'

export const List = ({ children, className, ...props }: ListProps) => {
  return (
    <ul className={cn(styles.list, className)} {...props}>
      {children}
    </ul>
  )
}
