import { List, VacancyBlock } from '@components'
import styles from './vacancyList.module.css'
import { VacancyListProps } from '@props'

export const VacancyList = ({ data }: VacancyListProps) => {
  return (
    <List className={styles.wrapper}>
      {data.map((dataBlock, index) => {
        return (
          <VacancyBlock
            title={dataBlock.date}
            vacancy={dataBlock.vacancy}
            key={index}
          />
        )
      })}
    </List>
  )
}
