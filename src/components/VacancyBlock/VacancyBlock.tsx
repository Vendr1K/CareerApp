import { List, ListItem, Skeleton } from '../UI'
import { VacancyCard } from '../VacancyCard/VacancyCard'
import styles from './vacancyBlock.module.css'

export const VacancyBlock = ({ title, vacancy }) => {
  const localDate = new Date()
  const publishedDate = new Date(title)
  return (
    <ListItem className={styles.wrapper}>
      <h2 className={styles.title}>
        {publishedDate.getDate() === localDate.getDate() &&
          publishedDate.getMonth() === localDate.getMonth() &&
          publishedDate.getFullYear() === localDate.getFullYear() && (
            <>Сегодня, </>
          )}
        {new Date(title).toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })}
        <>
          {' '}
          {publishedDate.getFullYear() !== localDate.getFullYear() &&
            localDate.getFullYear()}
        </>
      </h2>
      <List className={styles.list}>
        {vacancy.map(info => {
          return <VacancyCard vacancy={info} key={info.id} />
        })}
      </List>
    </ListItem>
  )
}
