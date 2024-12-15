import { RequestVacanciesType, Vacancy } from '@models'
import { VACANCIES, QUERY_FRONTEND, MOCK_QUERY, CARD_FOR_PAGE } from '@constans'

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
  const response = await fetch(
    `${VACANCIES}?${QUERY_FRONTEND}${MOCK_QUERY}&per_page=${CARD_FOR_PAGE}&page=${currentPage - 1}`
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
