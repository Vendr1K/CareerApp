import { List, ListItem, Skeleton } from '../UI'
import styles from './skeletonBlock.module.css'

export const SkeletonBlock = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton width={'250px'} height={'32px'} radius={'16px'} />
      <List className={styles.skeletonList}>
        {Array.from({ length: 21 }, (_, index) => (
          < ListItem className={styles.skeletonItem} key={index} >
            <Skeleton width={'225px'} height={'24px'} radius={'16px'} mb={'4px'} />
            <Skeleton width={'131px'} height={'24px'} radius={'16px'} mb={'16px'} />
            <Skeleton width={'96px'} height={'16px'} radius={'16px'} mb={'8px'} />
            <Skeleton width={'55px'} height={'16px'} radius={'16px'} mb={'16px'} />
            <div className={styles.skeletonBottom}>
              <Skeleton width={'16px'} height={'16px'} radius={'16px'} />
              <Skeleton width={'148px'} height={'16px'} radius={'16px'} />
            </div>
          </ListItem>
        ))
        }
      </List>
    </div >
  )
}