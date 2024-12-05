import { LogoProps } from '@props'
import { Link } from '@components/UI'

import cn from 'classnames'
import styles from './logo.module.css'

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link target={'_parent'} className={cn(styles.link, className)} {...props}>
      <span className={styles.logo}>Career</span>
      <span className={cn(styles.logo, styles.primary)}>App</span>
    </Link>
  )
}
