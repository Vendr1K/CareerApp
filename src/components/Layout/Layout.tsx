import { LayoutProps } from '@props'

import cn from 'classnames'
import styles from './layout.module.css'

export const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={cn(styles.layout, className)} {...props}>
      {children}
    </div>
  )
}
