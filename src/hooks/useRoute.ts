import { APP_PAGE } from '@constans'
import { useRouter } from '@store'
import { useEffect } from 'react'

interface useRouteProps {
  keyParam: string
  valueParam: string
}

export const useRoute = () => {
  const { path, setPath, navigate, goBack } = useRouter()

  const addQueryParam = ({ keyParam, valueParam }: useRouteProps) => {
    const newQueryParams = new URLSearchParams(window.location.search)
    newQueryParams.set(keyParam, valueParam)
    const newURL = `${window.location.pathname}?${newQueryParams}`
    window.history.replaceState({ path: newURL }, '', newURL)
  }

  const removeQueryParam = (keyParam: string) => {
    try {
      const url = new URL(window.location.href)
      url.searchParams.delete(keyParam)
      window.history.replaceState(null, '', url.toString())
    } catch (error) {
      console.error('Failed to modify URL:', error)
    }
  }

  const removeQueryParams = () => {
    const url = new URL(window.location.href)
    url.search = ''
    window.history.replaceState({}, document.title, url)
  }

  useEffect(() => {
    if (path === '/') {
      navigate(APP_PAGE.main)
    }
    const onPopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return {
    path,
    setPath,
    navigate,
    goBack,
    addQueryParam,
    removeQueryParam,
    removeQueryParams
  }
}
