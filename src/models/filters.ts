export interface FilterList {
  id: number
  text: string
  icon: string
  extraIcon: string
  filterItem: FilterItem
}

export interface FilterItem {
  type: string
  filterOptions: {
    value: string
    id: string
  }[]
}

export interface FilterItem {
  type: string
  filterOptions: FilterOption[]
}

export interface FilterOption {
  value: string
  id: string
}
