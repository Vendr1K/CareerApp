import { useState, useEffect } from 'react'

export const useFetch = <T = unknown>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error('Ошибка сети, попробуйте позже')
        const result: T = await response.json()
        setData(result)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Неизвестная ошибка')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, options])

  return { data, loading, error }
}
