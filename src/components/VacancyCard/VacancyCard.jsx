import { Icon } from '..';
import { ListItem } from '../UI'
import styles from './vacancyCard.module.css'

export const VacancyCard = ({ vacancy }) => {
  const { title, income, exp, city, company } = vacancy;
  return (
    <ListItem className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>{title}</h2>
        <Icon className={styles.hideIcon} name={'hide'} />
      </div>
      <span className={styles.price}>
        {income ?
          `${income.minValue && `от ${income.minValue}` || ''} ${income.maxValue && income.minValue && '-' || ''} ${income.maxValue && `до ${income.maxValue}` || ''} ₽`
          :
          'Доход не указан'
        }
      </span>
      <span className={`${styles.text} ${styles.company}`}>{company}</span>
      <span className={`${styles.text} ${styles.city}`}>{city}</span>
      <div className={styles.exp}>
        <Icon className={styles.icon} name={'star'} />
        <span className={styles.text}>
          {income ?
            `${!exp.maxValue && !exp.minValue && '' || 'опыт'} ${exp.minValue && `от ${exp.minValue}` || ''} ${exp.maxValue && `до ${exp.maxValue}` || ''} лет`
            :
            'Без опыта'
          }
        </span>
      </div>
    </ListItem>
  )
}
