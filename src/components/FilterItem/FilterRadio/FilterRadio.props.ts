import { Nullable } from '@types'

export interface FilterRadioProps {
  value: string
  id: string
  radioValue: string[]
  changeRadio: () => void
}
