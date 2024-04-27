import styles from './button.module.css'

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}