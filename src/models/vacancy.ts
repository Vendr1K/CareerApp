import { Nullable } from '@types'

export interface VacancyStore {
  vacancyList: FiltredVacancyList[]
  error: unknown
  isLoading: boolean
  fetchVacancyList: (page: number) => void
  currentPage: number
  setPage: (newPage: number) => void
  totalPagesCount: Nullable<number>
}

export interface Vacancy {
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

export interface FiltredVacancyList {
  date: string
  vacancy: Vacancy[]
}
