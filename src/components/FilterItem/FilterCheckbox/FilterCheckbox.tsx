import { useRef } from 'react'
import { Nullable } from '@types'
import { KEY_CODES_BUTTONS } from '@constans'
import { FilterCheckboxProps } from '@props'
import { Icon } from '@components'

import styles from './filterCheckbox.module.css'

const { ENTER } = KEY_CODES_BUTTONS

export const FilterCheckbox = ({
  id,
  value,
  checkboxData,
  toggleCheckbox
}: FilterCheckboxProps) => {
  const checkboxRef = useRef<Nullable<HTMLLabelElement>>(null)
  const handleEnterPressCheckbox = (
    event: React.KeyboardEvent<HTMLLabelElement>,
  ) => {
    if (event.key === ENTER && document.activeElement === checkboxRef.current) {
      toggleCheckbox()
    }
  }
  return (
    <label
      className={styles.label}
      tabIndex={0}
      ref={checkboxRef}
      onKeyDown={event => handleEnterPressCheckbox(event)}
    >
      <input
        type='checkbox'
        value={value}
        className={styles.checkbox}
        onChange={toggleCheckbox}
        checked={checkboxData.includes(id)}
        tabIndex={-1}
      />
      {!checkboxData.includes(id) && <Icon name={'checkbox'} className={styles.icon} />}
      {checkboxData.includes(id) && <Icon name={'checkboxActive'} className={styles.icon} />}
      <span>{value}</span>
    </label>
  )
}
