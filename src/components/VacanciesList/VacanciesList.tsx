import { VacanciesListProps } from '@props'
import { VacanciesBlock } from '@components'
import { List } from '@components/UI'

import styles from './vacanciesList.module.css'

export const VacanciesList = ({ data }: VacanciesListProps) => {
  return (
    <List className={styles.wrapper}>
      {data.map((dataBlock, index) => {
        return (
          <VacanciesBlock
            title={dataBlock.date}
            vacancy={dataBlock.vacancy}
            key={index}
          />
        )
      })}
    </List>
  )
}
