import { Icon } from '..'
import { ListItem } from '../UI'
import styles from './vacancyCard.module.css'

export const VacancyCard = ({ vacancy }) => {
  const { name, salary, experience, area, employer } = vacancy

  const convertСurrency = cur => {
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
    <ListItem className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>{name}</h2>
        <Icon className={styles.hideIcon} name={'hide'} />
      </div>
      <span className={styles.price}>
        {salary
          ? `${(salary.from && `от ${salary.from.toLocaleString()}`) || ''} ${(salary.from && salary.to && '-') || ''} ${(salary.to && `до ${salary.to.toLocaleString()}`) || ''} ${salary.currency ? convertСurrency(salary.currency) : ''}  `
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
    </ListItem>
  )
}
