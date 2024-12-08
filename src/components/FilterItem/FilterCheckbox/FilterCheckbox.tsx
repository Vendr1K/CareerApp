import { useRef } from 'react'

import { FilterCheckboxProps } from '@props'
import { Icon } from '@components'

import styles from './filterCheckbox.module.css'
import { Nullable } from '@types'
import { KEY_CODES_BUTTONS } from '@constans'

const { ENTER } = KEY_CODES_BUTTONS

export const FilterCheckbox = ({
  value,
  checkboxData,
  toggleCheckbox,
  setCheckboxData
}: FilterCheckboxProps) => {
  const checkboxRef = useRef<Nullable<HTMLLabelElement>>(null)
  const handleEnterPressCheckbox = (
    event: React.KeyboardEvent<HTMLLabelElement>,
    value: string
  ) => {
    if (event.key === ENTER && document.activeElement === checkboxRef.current) {
      const index = checkboxData.indexOf(value)
      setCheckboxData(
        index !== -1
          ? [...checkboxData.slice(0, index), ...checkboxData.slice(index + 1)]
          : [...checkboxData, value]
      )
    }
  }
  return (
    <label
      className={styles.label}
      tabIndex={0}
      ref={checkboxRef}
      onKeyDown={event => handleEnterPressCheckbox(event, value)}
    >
      <input
        type='checkbox'
        value={value}
        className={styles.checkbox}
        onChange={toggleCheckbox}
        checked={checkboxData.includes(value)}
        tabIndex={-1}
      />
      {!checkboxData.includes(value) && <Icon name={'checkbox'} />}
      {checkboxData.includes(value) && <Icon name={'checkboxActive'} />}
      <span>{value}</span>
    </label>
  )
}
