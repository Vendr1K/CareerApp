import { create } from 'zustand'
import { VacancyStore } from '@models'
import { daysApiFilter, scrollTop } from '@utils'
import { fetchVacancies } from '@services'

export const useVacanciesStore = create<VacancyStore>()(set => ({
  vacanciesList: [],
  currentPage: 1,
  setPage: newPage => set({ currentPage: newPage }),
  isLoading: false,
  totalPagesCount: null,
  error: null,
  fetchVacancies: async currentPage => {
    try {
      set({ isLoading: true })
      set({ error: null })

      const data = await fetchVacancies(currentPage)

      set({ totalPagesCount: data.totalPages })
      set({ vacanciesList: daysApiFilter(data.vacanciesListData) })
      scrollTop()
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error })
      } else {
        set({
          error: { message: 'Произошла неизвестная ошибка', name: 'Error' }
        })
      }
    } finally {
      set({ isLoading: false })
    }
  }
}))
