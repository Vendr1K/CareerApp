import { SkeletonProps } from '@props'

import cn from 'classnames'
import styles from './skeleton.module.css'

export const Skeleton = ({
  className,
  width,
  height,
  radius,
  mb,
  ...props
}: SkeletonProps) => {
  const inlineStyle = {
    width,
    height,
    borderRadius: radius,
    marginBottom: mb
  }

  return (
    <div
      style={inlineStyle}
      className={cn(styles.skeleton, className)}
      {...props}
    />
  )
}
