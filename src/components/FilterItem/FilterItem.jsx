import { useEffect, useState } from 'react';
import { Icon, Dropdown } from '..';
import { useClickOutside } from '../../hooks';
import { Button, ListItem } from '../UI';

import styles from './filterItem.module.css';

export const FilterItem = ({
  text,
  icon,
  extraIcon,
  option,
  list,
  recursion = false,
  data,
  setData,
  radioValue,
  setRadioValue
}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleCheckboxes = (e) => {
    const index = data.indexOf(e.target.value)
    setData(index !== -1 ? [...data.slice(0, index), ...data.slice(index + 1)] : [...data, e.target.value])
  };

  const changeRadio = (e) => {
    setRadioValue(e.target.value)
  };

  const ref = useClickOutside(() => {
    setIsDropdownOpen(recursion ? isDropdownOpen : false)
  });

  return (
    <li className={styles.item}>
      <Dropdown setIsDropdownOpen={setIsDropdownOpen} ref={ref}>
        <Button
          className={`${styles.button} ${isDropdownOpen ? styles.open : ''} ${recursion && styles.recursion}`}
          onClick={() => { setIsDropdownOpen(() => isDropdownOpen ? false : true) }}
        >
          <Icon name={icon} />
          <span className={styles.text}>{text}</span>
          {extraIcon && <Icon className={styles.icon} name={extraIcon} />}
        </Button>

        {/* dropdown open params */}
        {isDropdownOpen &&
          <div className={`${styles.optionWrapper} ${recursion ? styles.relative : ''}`}>
            <ul className={styles.list}>
              {option?.type === 'radio' && option?.filterOption?.map((item) => {
                return (
                  <li className={styles.itemDrop} key={item.id}>
                    <label className={styles.label} >
                      <input
                        type="radio"
                        value={item.value}
                        className={styles.radio}
                        checked={radioValue === item.value ? true : false}
                        onChange={changeRadio}
                      />
                      {radioValue !== item.value && <Icon name={'radio'} />}
                      {radioValue === item.value && <Icon name={'radioActive'} />}
                      <span>{item.value}</span>
                    </label>
                  </li>
                )
              })}
              {option?.type === 'checkbox' && option?.filterOption?.map((item) => {
                return (
                  <li className={styles.itemDrop} key={item.id}>
                    <label className={styles.label} >
                      <input
                        type="checkbox"
                        value={item.value}
                        className={styles.checkbox}
                        onChange={toggleCheckboxes}
                        checked={data.includes(item.value)}
                      />
                      {!data.includes(item.value) && <Icon name={'checkbox'} />}
                      {data.includes(item.value) && <Icon name={'checkboxActive'} />}
                      <span>{item.value}</span>
                    </label>
                  </li>
                )
              })}
              {list?.map((filter) => {
                return (
                  <FilterItem extraIcon={filter.extraIcon}
                    icon={filter.icon}
                    text={filter.text}
                    option={filter?.filterItem}
                    list={filter?.filterList}
                    key={filter.id}
                    recursion={true}
                    data={data}
                    setData={setData}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                  />
                )
              })}
            </ul>
          </div>}
      </Dropdown>
    </li>
  )
}
