import { Icon } from '..'
import { Button, ListItem } from '../UI'
import styles from './filterItem.module.css'

export const FilterItem = ({ text, icon, extraIcon }) => {
  return (
    <ListItem className={styles.item}>
      <Button className={styles.button}>
        <Icon name={icon} />
        <span className={styles.text}>{text}</span>
        {extraIcon && <Icon name={extraIcon} />}
      </Button>
    </ListItem>
  )
}