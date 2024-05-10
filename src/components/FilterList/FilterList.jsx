
import { useState } from "react"
import { FilterItem, Icon } from ".."
import { filterData } from "../../constans/filterData"
import { Button, List } from "../UI"

import styles from './filterList.module.css'

export const FilterList = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState(null);

  const clear = () => {
    setData([]);
    setInputValue('');
    setRadioValue(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperFilter}>
        <label className={styles.label}>
          <input className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Город" />
          <Icon className={styles.extraIcon} name={'location'} />
          {inputValue && <Icon className={styles.clearIcon} onClick={() => setInputValue('')} name={'clear'} />}
        </label>
        <List className={styles.list}>
          {filterData.map((filter) => {
            return (
              <FilterItem
                extraIcon={filter.extraIcon}
                icon={filter.icon}
                text={filter.text}
                option={filter?.filterItem}
                list={filter?.filterList}
                key={filter.id}
                data={data}
                setData={setData}
                radioValue={radioValue}
                setRadioValue={setRadioValue}
              />
            )
          })}
        </List>
      </div>
      <Button className={styles.clearFilter} onClick={clear}>Сбросить все фильтры</Button >
    </div>
  )
}