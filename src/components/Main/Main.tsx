import { MainProps } from '@props'

import cn from 'classnames'
import styles from './main.module.css'

export const Main = ({ children, className, ...props }: MainProps) => {
  return (
    <main className={cn(styles.main, className)} {...props}>
      {children}
    </main>
  )
}
