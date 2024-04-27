
import { Icon } from "../Icon/Icon"
import { List, ListItem, Button } from "../UI"

import styles from './filterList.module.css'

export const FilterList = () => {
  const dataFilter = [
    {
      id: 1,
      icon: 'location',
      value: 'Город',
      extraIcon: null
    },
    {
      id: 2,
      icon: 'bag',
      value: 'Тип занятости',
      extraIcon: 'arrow'
    }, {
      id: 3,
      icon: 'optional',
      value: 'Дополнительные фильтры',
      extraIcon: 'arrow'
    }
  ]
  return (
    <div className={styles.filter}>
      <List className={styles.list}>
        {dataFilter.map((filter) => {
          return (
            <ListItem className={styles.item}>
              <Button className={styles.button}>
                <Icon name={filter.icon} />
                <span className={styles.text}>{filter.value}</span>
                {filter.extraIcon && <Icon name={filter.extraIcon} />}
              </Button>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}