import { useEffect, useRef, useState } from 'react'
import { useVacanciesStore } from '@store'
import { FilterItemProps } from '@props'

import {
  INNER_DESKTOP_OFFSET,
  KEY_CODES_BUTTONS,
  NULL_FILTER,
  QUERY_TEXT
} from '@constans'
import { Dropdown, FilterCheckbox, FilterRadio, Icon } from '@components'
import { Button } from '@components/UI'
import { IFilterItem } from '@models'
import { useClickOutside, useKeyPress } from '@hooks'

import cn from 'classnames'
import styles from './filterItem.module.css'
import { Nullable } from '@types'

const { ESCAPE } = KEY_CODES_BUTTONS

export const FilterItem = ({
  text,
  icon,
  extraIcon,
  option,
  list,
  recursion = false
}: FilterItemProps) => {
  const { fetchVacancies } = useVacanciesStore()

  const [filterData, setFilterData] = useState<string[]>(searchFilter(option))

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [maxScrollWrapperHeight, setMaxScrollWrapperHeight] =
    useState<Nullable<number>>(null)

  const dropdownRef = useRef<Nullable<HTMLDivElement>>(null)
  const scrollWrapperRef = useRef<Nullable<HTMLDivElement>>(null)

  const toggleCheckbox = ({ query, id }: { query: string; id: string }) => {
    const params = new URLSearchParams(window.location.search)
    const existingValues =
      query === QUERY_TEXT
        ? (params.get(query)?.split(' ') ?? [])
        : params.getAll(query)
    const isChecked = existingValues.includes(id)

    if (query === QUERY_TEXT) {
      if (isChecked) {
        const newValues = existingValues.filter(filterId => filterId !== id)
        if (newValues.length === 0) {
          params.delete(query)
        } else {
          params.set(query, newValues.join(' '))
        }
        setFilterData(prev => prev.filter(filterId => filterId !== id))
      } else {
        existingValues.push(id)
        params.set(query, existingValues.join(' '))
        setFilterData(prev => [...prev, id])
      }
    } else {
      if (isChecked) {
        const newArgs = existingValues.filter(filterId => filterId !== id)
        params.delete(query)
        if (newArgs.length) {
          params.append(query, newArgs.join('+'))
        }
        setFilterData(prev => prev.filter(filterId => filterId !== id))
      } else {
        params.append(query, id)
        setFilterData(prev => [...prev, id])
      }
    }

    window.history.pushState({}, '', `${window.location.pathname}?${params}`)
    fetchVacancies(1)
  }

  const changeRadio = ({ query, id }: { query: string; id: string }) => {
    const params = new URLSearchParams(window.location.search)

    if (id === NULL_FILTER) {
      params.delete(query)
      setFilterData([NULL_FILTER])
    } else {
      if (params.has(query)) {
        if (params.get(query) !== id) {
          params.set(query, id)
          if (filterData.length === 2 && filterData[1] === 'true') {
            // filterData[1] === 'true' проверка extraType в dataIncomeLvl, единичный случай
            setFilterData([id, filterData[1]])
          } else {
            setFilterData([id])
          }
        }
      } else {
        params.set(query, id)
        if (filterData.length === 2 && filterData[1] === 'true') {
          setFilterData([id, filterData[1]])
        } else {
          setFilterData([id])
        }
      }
    }

    window.history.pushState({}, '', `${window.location.pathname}?${params}`)
    fetchVacancies(1)
  }

  useEffect(() => {
    const onPopState = () => {
      setFilterData(searchFilter(option))
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

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
                      {item.extraType === 'checkbox' ? (
                        <FilterCheckbox
                          checkboxData={filterData}
                          toggleCheckbox={() =>
                            toggleCheckbox({
                              query: item.extraQuery ?? 'option.query',
                              id: item.id
                            })
                          }
                          value={item.value}
                          id={item.id}
                          setCheckboxData={setFilterData}
                        />
                      ) : (
                        <FilterRadio
                          changeRadio={() => {
                            changeRadio({ query: option.query, id: item.id })
                          }}
                          radioValue={filterData}
                          value={item.value}
                          id={item.id}
                        />
                      )}
                    </li>
                  )
                })}
              {option?.type === 'checkbox' &&
                option?.filterOptions?.map(item => {
                  return (
                    <li className={styles.itemDrop} key={item.id}>
                      <FilterCheckbox
                        checkboxData={filterData}
                        toggleCheckbox={() =>
                          toggleCheckbox({ query: option.query, id: item.id })
                        }
                        value={item.value}
                        id={item.id}
                        setCheckboxData={setFilterData}
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

const searchFilter = (option?: IFilterItem) => {
  if (!option?.query) return []

  const params = new URLSearchParams(window.location.search)
  if (params.has(option.query)) {
    const values =
      option.query === QUERY_TEXT
        ? (params.get(option.query)?.split(' ') ?? [])
        : params.getAll(option.query)

    return values.length > 0 ? values : [NULL_FILTER]
  }

  return [NULL_FILTER]
}
