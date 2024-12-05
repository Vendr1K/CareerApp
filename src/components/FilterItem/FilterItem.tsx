import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { FilterItemProps } from '@props'
import { Nullable } from '@types'
import { INNER_DESKTOP_OFFSET } from '@constans'
import { Dropdown, Icon } from '@components'
import { Button } from '@components/UI'
import { useClickOutside } from '@hooks'

import cn from 'classnames'
import styles from './filterItem.module.css'

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
}: FilterItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [maxScrollWrapperHeight, setMaxScrollWrapperHeight] =
    useState<Nullable<number>>(null)

  const dropdownRef = useRef<Nullable<HTMLDivElement>>(null)
  const scrollWrapperRef = useRef<Nullable<HTMLDivElement>>(null)

  const toggleCheckboxes = (e: ChangeEvent<HTMLInputElement>) => {
    const index = data.indexOf(e.target.value)
    setData(
      index !== -1
        ? [...data.slice(0, index), ...data.slice(index + 1)]
        : [...data, e.target.value]
    )
  }

  const changeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value)
  }

  useClickOutside({
    ref: dropdownRef,
    callback: () => {
      setIsDropdownOpen(recursion ? isDropdownOpen : false)
    }
  })

  useEffect(() => {
    if (recursion) return
    if (!scrollWrapperRef.current) return

    const rect = scrollWrapperRef.current?.getBoundingClientRect()
    setMaxScrollWrapperHeight(
      Math.floor(window.innerHeight - rect.top - INNER_DESKTOP_OFFSET)
    )
  }, [scrollWrapperRef.current])

  return (
    <li className={styles.item}>
      <Dropdown ref={dropdownRef}>
        <Button
          className={cn(styles.button, {
            [styles.open]: isDropdownOpen,
            [styles.recursion]: recursion
          })}
          onClick={() => {
            setIsDropdownOpen(() => (isDropdownOpen ? false : true))
          }}
        >
          <Icon name={icon} />
          <span className={styles.text}>{text}</span>
          {extraIcon && <Icon className={styles.icon} name={extraIcon} />}
        </Button>

        {/* dropdown open params */}
        {isDropdownOpen && (
          <div
            ref={scrollWrapperRef}
            style={{ maxHeight: maxScrollWrapperHeight ?? undefined }}
            className={cn(styles.optionWrapper, {
              [styles.relative]: recursion
            })}
          >
            <ul
              className={cn(styles.list, { [styles.listBorder]: !recursion })}
            >
              {option?.type === 'radio' &&
                option?.filterOptions?.map(item => {
                  return (
                    <li className={styles.itemDrop} key={item.id}>
                      <label className={styles.label}>
                        <input
                          type='radio'
                          value={item.value}
                          className={styles.radio}
                          checked={radioValue === item.value ? true : false}
                          onChange={changeRadio}
                        />
                        {radioValue !== item.value && <Icon name={'radio'} />}
                        {radioValue === item.value && (
                          <Icon name={'radioActive'} />
                        )}
                        <span>{item.value}</span>
                      </label>
                    </li>
                  )
                })}
              {option?.type === 'checkbox' &&
                option?.filterOptions?.map(item => {
                  return (
                    <li className={styles.itemDrop} key={item.id}>
                      <label className={styles.label}>
                        <input
                          type='checkbox'
                          value={item.value}
                          className={styles.checkbox}
                          onChange={toggleCheckboxes}
                          checked={data.includes(item.value)}
                        />
                        {!data.includes(item.value) && (
                          <Icon name={'checkbox'} />
                        )}
                        {data.includes(item.value) && (
                          <Icon name={'checkboxActive'} />
                        )}
                        <span>{item.value}</span>
                      </label>
                    </li>
                  )
                })}
              {list?.map(filter => {
                return (
                  <FilterItem
                    extraIcon={filter.extraIcon}
                    icon={filter.icon}
                    text={filter.text}
                    option={filter?.filterItem}
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
          </div>
        )}
      </Dropdown>
    </li>
  )
}
