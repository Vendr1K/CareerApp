import { DETAIL_VACANCY_API } from '@constans'
import { DetailVacancy } from '@models'

export const fetchDetailVacancyInfo = async (vacancyId: number | string) => {
  const response = await fetch(`${DETAIL_VACANCY_API}/${vacancyId}`)
  if (!response.ok) throw new Error('Ошибка при загрузке вакансии')
  const result = await response.json()
  return formatDetailVacancy(result)
}

// export const fetchSimilarVacancies = async (vacancyId: number) => {
//   const response = await fetch(`${API_URL}/${vacancyId}/similar`)
//   if (!response.ok) throw new Error('Ошибка при загрузке похожих вакансий')
//   const result = await response.json()
//   return result
//   // return formatVacancy(result.items.slice(0, LIMIT_CAR_FOR_SIMILARY));
// }

const formatDetailVacancy = (responceData: unknown): DetailVacancy => {
  if (typeof responceData !== 'object' || responceData === null) {
    throw new Error('Неверный формат данных вакансии')
  }

  const data = responceData as Record<string, any>

  return {
    id: data.id,
    name: data.name,
    salary: data.salary ?? null,
    location: data.address?.city || data.area?.name || null,
    requirements: [
      { name: data.experience?.name ?? null, icon: 'star' },
      { name: data.employment?.name ?? null, icon: 'bag' },
      { name: data.schedule?.name ?? null, icon: 'time' }
    ],
    description: data.description ?? null,
    key_skills: data.key_skills || [],
    area: data.area.name ?? null,
    published_at: data.published_at ?? null,
    company: data.employer?.name ?? null,
    address: data.address?.raw ?? null,
    logo: data.employer?.logo_urls?.[240] ?? null
  }
}
