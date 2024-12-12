import { VacancyCardProps } from '@props'
import { Icon } from '@components'
import { ListItem } from '@components/UI'

import styles from './vacancyCard.module.css'
import { useRoute } from '@hooks'
import { APP_PAGE } from '@constans'

export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  const { name, salary, experience, area, employer } = vacancy
  const { navigate, path, addQueryParam } = useRoute()

  const convertСurrency = (cur: string) => {
    switch (cur) {
      case 'RUR':
        return `₽`
      case 'USD':
        return '$'
      default:
        return cur
    }
  }

  return (
    <ListItem>
      <div
        className={styles.wrapper}
        onClick={() => navigate(APP_PAGE.vacancy)}
      >
        <div className={styles.top}>
          <h2 className={styles.title}>{name}</h2>
          <Icon className={styles.hideIcon} name={'hide'} />
        </div>
        <span className={styles.price}>
          {salary
            ? `
          ${(salary.from && `от ${salary.from.toLocaleString()}`) || ''} 
          ${(salary.from && salary.to && '-') || ''} 
          ${(salary.to && `до ${salary.to.toLocaleString()}`) || ''} 
          ${salary.currency ? convertСurrency(salary.currency) : ''} 
          `
            : 'Доход не указан'}
        </span>
        <span className={`${styles.text} ${styles.company}`}>
          {employer.name}
        </span>
        <span className={`${styles.text} ${styles.city}`}>{area.name}</span>
        <div className={styles.exp}>
          <Icon className={styles.icon} name={'star'} />
          <span className={styles.text}>{experience && experience.name}</span>
        </div>
      </div>
    </ListItem>
  )
}
