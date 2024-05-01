
import { FilterItem } from ".."
import { List } from "../UI"

import styles from './filterList.module.css'

export const FilterList = () => {
  const dataFilter = [
    {
      id: 1,
      icon: 'location',
      text: 'Город',
      extraIcon: null
    },
    {
      id: 2,
      icon: 'bag',
      text: 'Тип занятости',
      extraIcon: 'arrow'
    }, {
      id: 3,
      icon: 'optional',
      text: 'Дополнительные фильтры',
      extraIcon: 'arrow'
    }
  ]
  return (
    <div className={styles.filter}>
      <List className={styles.list}>
        {dataFilter.map((filter) => {
          return (
            <FilterItem
              extraIcon={filter.extraIcon}
              icon={filter.icon}
              text={filter.text}
              key={filter.id}
            />
          )
        })}
      </List>
    </div>
  )
}