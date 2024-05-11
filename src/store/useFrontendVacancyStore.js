import { create } from 'zustand'
import { daysApiFilter } from '../utils'

export const useFrontendVacancyStore = create((set) => ({
  vacancyList: [],
  isLoading: false,
  error: [],
  fetchVacancyList: async () => {
    try {
      set({ isLoading: true })
      const response = await fetch('https://api.hh.ru/vacancies?text=frontend&only_with_salary=true&per_page=100')
      if (!response.ok) {
        set({ error: 'Отсутствует связь со сторонним сервисом' })
        throw new Error('Отсутствует связь со сторонним сервисом');
      }
      const data = await response.json()
      const vacancyListData = data.items.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).map((item) => {
        const {
          name,
          salary,
          area,
          published_at,
          experience,
          employer,
          id
        } = item
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
      set({ vacancyList: daysApiFilter(vacancyListData)})
    } catch (errorStatus) {
      set({ error: errorStatus })
    } finally {
      set({ isLoading: false })
    }
  },
}))
