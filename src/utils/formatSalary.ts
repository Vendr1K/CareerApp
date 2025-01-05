import { Salary } from '@models'
import { Nullable } from '@types'

export const convertCurrency = (cur: string) => {
  switch (cur) {
    case 'RUR':
      return `₽`
    case 'USD':
      return '$'
    default:
      return cur
  }
}

export const formatSalary = (salary: Nullable<Salary>): string => {
  if (!salary) {
    return 'Доход не указан'
  }

  const parts: string[] = []

  if (salary.from !== null) {
    parts.push(`от ${salary.from.toLocaleString()}`)
  }
  if (salary.from !== null && salary.to !== null) {
    parts.push('-')
  }
  if (salary.to !== null) {
    parts.push(`до ${salary.to.toLocaleString()}`)
  }
  if (salary.currency) {
    parts.push(convertCurrency(salary.currency))
  }

  return parts.join(' ').trim()
}
