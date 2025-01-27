import { AREA_QUERY, AREAS_API } from '@constans'
import { AreasData, ResponseAreasAPI } from '@models'

export const fetchAreas = async (): Promise<AreasData[]> => {
  const response = await fetch(AREAS_API)
  if (!response.ok) throw new Error('Ошибка при загрузке вакансии')
  const result = await response.json()
  return prepareAreasData(result)
}

const prepareAreasData = (data: ResponseAreasAPI[]): AreasData[] => {
  const citiesPool: AreasData[] = []
  // data[0] - only Russian location
  data[0].areas?.map(region => {
    if (region.areas?.length === 0) {
      return citiesPool.push({
        value: region.name,
        id: region.id,
        query: AREA_QUERY
      })
    }
    region.areas?.map(city => {
      return citiesPool.push({
        value: city.name,
        id: city.id,
        query: AREA_QUERY
      })
    })
  })
  const result = citiesPool.sort((a, b) => +a.id - +b.id)

  return result
}
