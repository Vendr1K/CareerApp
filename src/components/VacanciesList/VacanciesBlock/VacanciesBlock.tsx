import { VacanciesBlockProps } from '@props'
import { VacancyCard } from '@components'
import { List, ListItem } from '@components/UI'

import styles from './vacanciesBlock.module.css'

export const VacanciesBlock = ({ title, vacancy }: VacanciesBlockProps) => {
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
