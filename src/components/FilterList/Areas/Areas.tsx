import { useEffect, useRef, useState } from 'react'
import { FilterCheckbox, Icon } from '@components'
import { useAreasStore, useVacanciesStore } from '@store'
import { AreasData } from '@models'
import { useClickOutside, useKeyPress } from '@hooks'
import { AREA_QUERY, INNER_DESKTOP_OFFSET, KEY_CODES_BUTTONS } from '@constans'
import { Nullable } from '@types'

import styles from './Areas.module.css'

const { ESCAPE } = KEY_CODES_BUTTONS

export const Areas = () => {
  const { fetchVacancies } = useVacanciesStore()
  const { areas, fetchStoreAreas } = useAreasStore()

  const [inputValue, setInputValue] = useState('')
  const [cityPool, setCityPool] = useState<AreasData[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [maxScrollWrapperHeight, setMaxScrollWrapperHeight] =
    useState<Nullable<number>>(null)
  const [activeArea, setActiveArea] = useState<string[]>(() => {
    const params = new URLSearchParams(window.location.search)
    return params.getAll(AREA_QUERY)
  })

  const areasContainerRef = useRef(null)
  const scrollWrapperRef = useRef<Nullable<HTMLUListElement>>(null)

  const toggleCheckbox = ({ query, id }: { query: string; id: string }) => {
    const params = new URLSearchParams(window.location.search)

    if (params.has(query) && params.getAll(query).includes(id)) {
      params.delete(query, id)
      setActiveArea(prev => prev.filter(areaId => areaId !== id))
    } else {
      params.append(query, id)
      setActiveArea(prev => [...prev, id])
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    fetchVacancies(1)
  }

  const handleFocus = () => {
    if (!!cityPool.length || inputValue.length > 3)
      return setIsDropdownOpen(true)
  }
  const handleClear = () => {
    setInputValue('')
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    if (!!areas.length) return
    fetchStoreAreas()
  }, [])

  useEffect(() => {
    if (inputValue.length < 3) {
      if (!activeArea.length) return setCityPool([])
      return setCityPool(areas.filter(city => activeArea.includes(city.id)))
    }
    setIsDropdownOpen(true)
    setCityPool(
      areas.filter(
        item => item.value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    )
  }, [inputValue, activeArea, areas])

  useEffect(() => {
    if (!scrollWrapperRef.current) return

    const rect = scrollWrapperRef.current?.getBoundingClientRect()
    setMaxScrollWrapperHeight(
      Math.floor(window.innerHeight - rect.top - INNER_DESKTOP_OFFSET)
    )
  }, [scrollWrapperRef.current])

  useClickOutside({
    ref: areasContainerRef,
    callback: () => {
      setIsDropdownOpen(false)
    },
    isActive: isDropdownOpen
  })

  useKeyPress({
    mainKey: ESCAPE,
    callback: () => {
      setIsDropdownOpen(false)
    },
    isActive: isDropdownOpen
  })

  return (
    <label className={styles.label} ref={areasContainerRef}>
      <input
        className={styles.input}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={handleFocus}
        placeholder='Город'
      />
      <Icon className={styles.extraIcon} name={'location'} />
      {inputValue && (
        <Icon
          className={styles.clearIcon}
          onClick={handleClear}
          name={'clear'}
        />
      )}

      {isDropdownOpen && !!cityPool.length && (
        <ul
          ref={scrollWrapperRef}
          style={{ maxHeight: maxScrollWrapperHeight ?? undefined }}
          className={styles.areasList}
        >
          {cityPool.map(item => {
            return (
              <li className={styles.itemDrop} key={item.id}>
                <FilterCheckbox
                  checkboxData={activeArea}
                  toggleCheckbox={() =>
                    toggleCheckbox({ query: AREA_QUERY, id: item.id })
                  }
                  value={item.value}
                  id={item.id}
                  setCheckboxData={setActiveArea}
                />
              </li>
            )
          })}
        </ul>
      )}
    </label>
  )
}
