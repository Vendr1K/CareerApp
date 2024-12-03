import styles from './container.module.css'

export const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
