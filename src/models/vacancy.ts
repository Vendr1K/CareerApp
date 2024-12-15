import { Nullable } from '@types'

export type RequestVacanciesType = {
  alternate_url: string
  page: number
  pages: number
  items: Vacancy[]
  per_page: number
}

export interface VacancyStore {
  vacanciesList: FiltredVacancyList[]
  error: Nullable<Error>
  isLoading: boolean
  fetchVacancies: (page: number) => void
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
