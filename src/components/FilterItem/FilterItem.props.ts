import { IFilterItem, FilterList } from '@models'

export interface FilterItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  extraIcon: string
  icon: string
  text: string
  option?: IFilterItem
  list?: FilterList[]
  recursion?: boolean
}
