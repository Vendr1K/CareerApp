import { useRef } from 'react'

import { Nullable } from '@types'
import { FilterRadioProps } from '@props'
import { Icon } from '@components'

import styles from './filterRadio.module.css'
import { KEY_CODES_BUTTONS } from '@constans'

const { ENTER } = KEY_CODES_BUTTONS

export const FilterRadio = ({
  value,
  id,
  radioValue,
  changeRadio
}: FilterRadioProps) => {
  const radioRef = useRef<Nullable<HTMLLabelElement>>(null)

  const handleEnterPressRadio = (
    event: React.KeyboardEvent<HTMLLabelElement>
  ) => {
    if (event.key === ENTER && document.activeElement === radioRef.current) {
      changeRadio()
    }
  }

  return (
    <label
      className={styles.label}
      ref={radioRef}
      onKeyDown={event => handleEnterPressRadio(event)}
      tabIndex={0}
    >
      <input
        type='radio'
        value={value}
        className={styles.radio}
        checked={radioValue[0] === id}
        onChange={changeRadio}
        tabIndex={-1}
      />
      {radioValue[0] !== id && <Icon name={'radio'} />}
      {radioValue[0] === id && <Icon name={'radioActive'} />}
      <span>{value}</span>
    </label>
  )
}
