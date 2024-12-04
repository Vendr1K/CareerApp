import { ContainerProps } from '@props'

import cn from 'classnames'
import styles from './container.module.css'

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}
