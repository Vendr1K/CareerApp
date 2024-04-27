import { Link } from '../'
import styles from './logo.module.css'

export const Logo = () => {
  return (
    <Link target={'_parent'} className={styles.link}>
      <span className={styles.logo}>Career</span> <span className={`${styles.logo} ${styles.primary}`}>App</span>
    </Link>
  )
}