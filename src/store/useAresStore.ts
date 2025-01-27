import { AreasData } from '@models'
import { fetchAreas } from '@services'
import { create } from 'zustand'

interface AreasStore {
  areas: AreasData[]
  loading: boolean
  fetchStoreAreas: () => void
}

export const useAreasStore = create<AreasStore>()(set => ({
  loading: false,
  areas: [],
  fetchStoreAreas: async () => {
    try {
      set({ loading: true })
      set({ areas: await fetchAreas() })
    } catch (error) {
      console.error('Ошибка:', error)
    } finally {
      set({ loading: false })
    }
  }
}))
