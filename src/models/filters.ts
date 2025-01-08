import { Nullable } from '@types'

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

export interface Filters {
  area: string[]
  employment: string[]
  period: Nullable<string>
  experience: Nullable<string>
  schedule: string[]
  stack: string[]
  education: string[]
  salary: Nullable<string>
  only_with_salary: string[]
  part_time: string[]
  label: string[]
  with_hidden: string[]
}
