import { ListItemProps } from '@props'

import cn from 'classnames'
import styles from './listItem.module.css'

export const ListItem = ({ children, className, ...props }: ListItemProps) => {
  return (
    <li className={cn(styles.item, className)} {...props}>
      {children}
    </li>
  )
}
