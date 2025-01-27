export interface FilterList {
  id: number
  text: string
  icon: string
  extraIcon: string
  filterItem: IFilterItem
}

export interface IFilterItem {
  type: string
  query: string
  filterOptions: FilterOption[]
}

export interface FilterOption {
  value: string
  id: string
  extraQuery?: string
  extraType?: string
}
