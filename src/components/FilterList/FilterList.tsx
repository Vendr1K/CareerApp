import { useEffect } from 'react'
import { Areas, FilterItem } from '@components'
import { Button, List } from '@components/UI'
import { DATA_ADDITIONAL_FILTER, DATA_BAG_FILTER } from '@constans'
import { useRoute } from '@hooks'
import { useVacanciesStore } from '@store'

import styles from './filterList.module.css'

export const FilterList = () => {
  const { removeQueryParams } = useRoute()
  const { fetchVacancies } = useVacanciesStore()

  const clear = () => {
    removeQueryParams()
    fetchVacancies(1)
  }

  useEffect(() => {
    const onPopState = () => {
      fetchVacancies(1)
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperFilter}>
        <Areas />
        <List className={styles.list}>
          {DATA_BAG_FILTER.map(filter => {
            return (
              <FilterItem
                key={filter.id}
                extraIcon={filter.extraIcon}
                icon={filter.icon}
                text={filter.text}
                option={filter?.filterItem}
              />
            )
          })}
        </List>
        <List className={styles.list}>
          {DATA_ADDITIONAL_FILTER.map(filter => {
            return (
              <FilterItem
                key={filter.id}
                extraIcon={filter.extraIcon}
                icon={filter.icon}
                text={filter.text}
                list={filter?.filterList}
              />
            )
          })}
        </List>
      </div>
      <Button className={styles.clearFilter} onClick={clear}>
        Сбросить все фильтры
      </Button>
    </div>
  )
}
