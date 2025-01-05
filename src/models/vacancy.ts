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
  salary: Salary
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

export interface DetailVacancy {
  id: number
  name: string
  salary: Salary
  location: Nullable<string>
  requirements: [
    { name: Nullable<string>; icon: 'star' },
    { name: Nullable<string>; icon: 'bag' },
    { name: Nullable<string>; icon: 'time' }
  ]
  description: Nullable<string>
  key_skills: { name: string }[]
  area: Nullable<string>
  published_at: string
  company: Nullable<string>
  address?: Nullable<string>
  logo: Nullable<string>
}

export interface FiltredVacancyList {
  date: string
  vacancy: Vacancy[]
}

export interface Salary {
  currency: string
  from: Nullable<number>
  gross: boolean
  to: Nullable<number>
}
