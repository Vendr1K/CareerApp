import { VacancyCardProps } from '@props'
import { useRoute } from '@hooks'
import { Icon } from '@components'
import { ListItem } from '@components/UI'

import { APP_PAGE } from '@constans'

import styles from './vacancyCard.module.css'
import { formatSalary } from '@utils'

export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  const { name, salary, experience, area, employer } = vacancy
  const { navigate, addQueryParam } = useRoute()

  const handleVacancyClick = () => {
    navigate(APP_PAGE.vacancy)
    addQueryParam({ keyParam: 'id', valueParam: vacancy.id })
  }

  return (
    <ListItem>
      <div className={styles.wrapper} onClick={handleVacancyClick}>
        <div className={styles.top}>
          <h2 className={styles.title}>{name}</h2>
          <Icon className={styles.hideIcon} name={'hide'} />
        </div>
        <span className={styles.price}>

          {formatSalary(salary)}
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
