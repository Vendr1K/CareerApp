import { VacancyListProps } from '@props'
import { VacancyBlock } from '@components'
import { List } from '@components/UI'

import styles from './vacancyList.module.css'

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
