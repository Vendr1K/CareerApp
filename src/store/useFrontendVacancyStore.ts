import { create } from 'zustand'
import { daysApiFilter } from '../utils'
import { Vacancy, VacancyStore } from '@models'

export const useFrontendVacancyStore = create<VacancyStore>()(set => ({
  vacancyList: [],
  isLoading: false,
  error: [],
  fetchVacancyList: async () => {
    try {
      set({ isLoading: true })
      const response = await fetch(
        'https://api.hh.ru/vacancies?text=frontend&only_with_salary=true&per_page=100'
      )
      if (!response.ok) {
        throw new Error('Отсутствует связь со сторонним сервисом')
      }
      const data = await response.json()
      const vacancyListData: Vacancy[] = data.items
        .sort(
          (a: Vacancy, b: Vacancy) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        )
        .map((item: Vacancy) => {
          const { name, salary, area, published_at, experience, employer, id } =
            item
          return {
            name,
            salary,
            area,
            published_at,
            experience,
            employer,
            id
          }
        })
      set({ vacancyList: daysApiFilter(vacancyListData) })
    } catch (errorStatus) {
      set({ error: errorStatus })
    } finally {
      set({ isLoading: false })
    }
  }
}))
