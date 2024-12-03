import { Nullable } from '@types'

export interface VacancyStore {
  vacancyList: filtredVacancyList[]
  error: unknown
  isLoading: boolean
  fetchVacancyList: () => void
}

export interface vacancy {
  name: string
  published_at: string
  salary: {
    currency: string
    from: Nullable<number>
    gross: boolean
    to: Nullable<number>
  }
  area: {
    id: string
    name: string
    url: string
  }
  experience: {
    id: string
    name: string
  }
  employer: {
    id: string
    name: string
  }
  id: string
}

export interface filtredVacancyList {
  date: string
  vacancy: vacancy[]
}
