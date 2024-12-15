import { create } from 'zustand'
import { Vacancy, VacancyStore } from '@models'
import { daysApiFilter, scrollTop } from '@utils'
import { CARD_FOR_PAGE, MOCK_QUERY, QUERY_FRONTEND, VACANCIES } from '@constans'

type RequestVacanciesType = {
  alternate_url: string
  page: number
  pages: number
  items: Vacancy[]
  per_page: number
}

export const useVacanciesStore = create<VacancyStore>()(set => ({
  vacancyList: [],
  currentPage: 1,
  setPage: newPage => set({ currentPage: newPage }),
  isLoading: false,
  totalPagesCount: null,
  error: [],
  fetchVacancyList: async currentPage => {
    try {
      set({ isLoading: true })
      const response = await fetch(
        `${VACANCIES}?${QUERY_FRONTEND}${MOCK_QUERY}&per_page=${CARD_FOR_PAGE}&page=${currentPage - 1}` /*page - 1 API считает с 0ой страницы */
      )
      if (!response.ok) {
        throw new Error('Отсутствует связь со сторонним сервисом')
      }
      const data: RequestVacanciesType = await response.json()
      const vacancyListData = data.items.map(item => {
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
      set({ totalPagesCount: data.pages })
      set({ vacancyList: daysApiFilter(vacancyListData) })
      scrollTop()
    } catch (errorStatus) {
      set({ error: errorStatus })
    } finally {
      set({ isLoading: false })
    }
  }
}))
