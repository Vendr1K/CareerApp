import { useRef } from 'react'

import { Nullable } from '@types'
import { FilterRadioProps } from '@props'
import { Icon } from '@components'

import styles from './filterRadio.module.css'
import { KEY_CODES_BUTTONS } from '@constans'

const { ENTER } = KEY_CODES_BUTTONS

export const FilterRadio = ({
  value,
  radioValue,
  changeRadio
}: FilterRadioProps) => {
  const radioRef = useRef<Nullable<HTMLLabelElement>>(null)

  const handleEnterPressRadio = (
    event: React.KeyboardEvent<HTMLLabelElement>,
    value: string
  ) => {
    if (event.key === ENTER && document.activeElement === radioRef.current) {
      changeRadio(value)
    }
  }

  return (
    <label
      className={styles.label}
      ref={radioRef}
      onKeyDown={event => handleEnterPressRadio(event, value)}
      tabIndex={0}
    >
      <input
        type='radio'
        value={value}
        className={styles.radio}
        checked={radioValue === value}
        onChange={() => changeRadio(value)}
        tabIndex={-1}
      />
      {radioValue !== value && <Icon name={'radio'} />}
      {radioValue === value && <Icon name={'radioActive'} />}
      <span>{value}</span>
    </label>
  )
}
