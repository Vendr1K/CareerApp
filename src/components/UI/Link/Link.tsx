import { LinkProps } from '@props'

import cn from 'classnames'
import styles from './link.module.css'

export const Link = ({
  href,
  className,
  target,
  children,
  ...props
}: LinkProps) => {
  return (
    <a
      href={href ?? '/'}
      className={cn(styles.link, className)}
      target={target ?? '_blank'}
      {...props}
    >
      {children}
    </a>
  )
}
