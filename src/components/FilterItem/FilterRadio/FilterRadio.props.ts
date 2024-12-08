import { Nullable } from '@types'

export interface FilterRadioProps {
  value: string
  radioValue: Nullable<string>
  changeRadio: (value: string) => void
}
