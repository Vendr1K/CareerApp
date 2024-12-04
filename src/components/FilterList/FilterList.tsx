import { useState } from 'react'

import { Nullable } from '@types'
import { Button, FilterItem, Icon, List } from '@components'
import { dataAdditionalFilter, bagDataFilter } from '@constans'

import styles from './filterList.module.css'

export const FilterList = () => {
  const [data, setData] = useState([''])
  const [inputValue, setInputValue] = useState('')
  const [radioValue, setRadioValue] = useState<Nullable<string>>(null)

  const clear = () => {
    setData([''])
    setInputValue('')
    setRadioValue(null)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperFilter}>
        <label className={styles.label}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Город'
          />
          <Icon className={styles.extraIcon} name={'location'} />
          {inputValue && (
            <Icon
              className={styles.clearIcon}
              onClick={() => setInputValue('')}
              name={'clear'}
            />
          )}
        </label>
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
    </div>
  )
}
