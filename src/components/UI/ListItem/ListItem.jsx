import styles from './listItem.module.css'

export const ListItem = ({ children, className, ...props }) => {
  return (
    <li className={`${styles.item} ${className}`} {...props}>
      {children}
    </li>
  )
}
