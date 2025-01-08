import { useState } from 'react'
import { Nullable } from '@types'
import { Areas, FilterItem } from '@components'
import { Button, List } from '@components/UI'
import { dataAdditionalFilter, bagDataFilter } from '@constans'

import styles from './filterList.module.css'

export const FilterList = () => {
  const [data, setData] = useState([''])
  const [radioValue, setRadioValue] = useState<Nullable<string>>(null)

  // into storeParams 
  const clear = () => {
    setData([''])
    setRadioValue(null)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperFilter}>
        <Areas />
        <List className={styles.list}>
          {bagDataFilter.map(filter => {
            return (
              <FilterItem
                key={filter.id}
                extraIcon={filter.extraIcon}
                icon={filter.icon}
                text={filter.text}
                option={filter?.filterItem}
                data={data}
                setData={setData}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
              />
            )
          })}
        </List>
        <List className={styles.list}>
          {dataAdditionalFilter.map(filter => {
            return (
              <FilterItem
                key={filter.id}
                extraIcon={filter.extraIcon}
                icon={filter.icon}
                text={filter.text}
                list={filter?.filterList}
                data={data}
                setData={setData}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
              />
            )
          })}
        </List>
      </div>
      <Button className={styles.clearFilter} onClick={clear}>
        Сбросить все фильтры
      </Button>
    </div >
  )
}
