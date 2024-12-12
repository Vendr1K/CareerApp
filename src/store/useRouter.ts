import { create } from 'zustand'

type routerType = {
  path: string
  setPath: (page: string) => void
  navigate: (page: string) => void
  goBack: () => void
}

export const useRouter = create<routerType>()(set => ({
  path: window.location.pathname,
  setPath: newPath => set({ path: newPath }),
  navigate: newPath => {
    window.history.pushState({}, '', newPath)
    set({ path: newPath })
  },
  goBack: () => history.go(-1)
}))
