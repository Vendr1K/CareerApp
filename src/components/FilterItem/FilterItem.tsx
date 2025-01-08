import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { FilterItemProps } from '@props'
import { Nullable } from '@types'
import { INNER_DESKTOP_OFFSET, KEY_CODES_BUTTONS } from '@constans'
import { Dropdown, FilterCheckbox, FilterRadio, Icon } from '@components'
import { Button } from '@components/UI'
import { useClickOutside, useKeyPress } from '@hooks'

import cn from 'classnames'
import styles from './filterItem.module.css'

const { ESCAPE } = KEY_CODES_BUTTONS

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

  const toggleCheckbox = () => {
  }

  const changeRadio = (value: string) => {
    setRadioValue(value)
  }

  useClickOutside({
    ref: dropdownRef,
    callback: () => {
      setIsDropdownOpen(recursion ? isDropdownOpen : false)
    }
  })

  useKeyPress({
    mainKey: ESCAPE,
    callback: () => {
      setIsDropdownOpen(recursion ? isDropdownOpen : false)
    },
    isActive: isDropdownOpen
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
                      <FilterRadio
                        changeRadio={changeRadio}
                        radioValue={radioValue}
                        value={item.value}
                      />
                    </li>
                  )
                })}
              {option?.type === 'checkbox' &&
                option?.filterOptions?.map(item => {
                  return (
                    <li className={styles.itemDrop} key={item.id}>
                      <FilterCheckbox
                        checkboxData={data}
                        toggleCheckbox={toggleCheckbox}
                        // todo with ID
                        value={item.value}
                        id={item.value}
                        setCheckboxData={setData}
                      />
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
