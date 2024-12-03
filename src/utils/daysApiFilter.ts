import { filtredVacancyList, vacancy } from '@models'

type Result = {
  [key: string]: vacancy[]
}

export function daysApiFilter(data: vacancy[]): filtredVacancyList[] {
  const dataDateFilter: { date: string; vacancy: vacancy[] }[] = []
  const result: Result = data.reduce((res, el) => {
    const dateKey = el.published_at.split('T')[0]
    if (res[dateKey]) {
      res[dateKey].push(el)
    } else {
      res[dateKey] = [el]
    }
    return res
  }, {} as Result)

  for (const key in result) {
    dataDateFilter.push({
      date: key,
      vacancy: result[key]
    })
  }

  return dataDateFilter
}
