import { FilterItem, FilterList } from '@models'
import { Nullable } from '@types'

export interface FilterItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  extraIcon: string
  icon: string
  text: string
  option?: FilterItem
  list?: FilterList[]
  data: string[]
  setData: React.Dispatch<React.SetStateAction<string[]>>
  radioValue: Nullable<string>
  setRadioValue: React.Dispatch<React.SetStateAction<Nullable<string>>>
  recursion?: boolean
}
