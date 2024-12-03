import styles from './layout.module.css'
import { LayoutProps } from './Layout.props'

export const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={`${styles.layout} ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
