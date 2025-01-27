import { RequestVacanciesType, Vacancy } from '@models'
import {
  VACANCIES,
  FRONTEND,
  CARD_FOR_PAGE,
  QUERY_SORT,
  QUERY_TEXT
} from '@constans'

interface VacanciesResponse {
  totalPages: number
  vacanciesListData: Vacancy[]
}
interface CustomError extends Error {
  status?: number
}
export const fetchVacancies = async (
  currentPage: number
): Promise<VacanciesResponse> => {
  const searchParams = new URLSearchParams(window.location.search).toString()
  const params = new URLSearchParams(searchParams)

  if (params.has(QUERY_TEXT)) {
    const currentTextValues = params.get(QUERY_TEXT)?.split(' ') || []
    if (!currentTextValues.includes('frontend')) {
      currentTextValues.push('frontend')
    }
    params.set(QUERY_TEXT, currentTextValues.join(' '))
  } else {
    params.set(QUERY_TEXT, FRONTEND)
  }

  const response = await fetch(
    `${VACANCIES}?${QUERY_SORT}&per_page=${CARD_FOR_PAGE}&page=${currentPage - 1}&${params.toString()}`
  )

  if (!response.ok) {
    const error: CustomError = new Error(
      'Отсутствует связь со сторонним сервисом'
    )
    error.status = response.status
    throw error
  }

  const data: RequestVacanciesType = await response.json()

  const vacancyListData = data.items.map(item => {
    const { name, salary, area, published_at, experience, employer, id } = item
    return { name, salary, area, published_at, experience, employer, id }
  })

  return {
    totalPages: data.pages,
    vacanciesListData: vacancyListData
  }
}
