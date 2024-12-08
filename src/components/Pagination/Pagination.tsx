import { usePagination } from '@hooks'
import { PaginationProps } from '@props'
import { DOTS } from '@constans'
import { Button } from '@components/UI'

import styles from './pagination.module.css'
import cn from 'classnames'

export const Pagination = ({
  disabled,
  totalPagesCount,
  currentPage,
  setPage
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalPagesCount
  })

  return (
    <ul className={styles.wrapper}>
      {paginationRange?.map((pageNumber, index) => (
        <li key={index} className={cn({ [styles.item]: pageNumber === DOTS })}>
          {pageNumber === DOTS ? (
            DOTS
          ) : (
            <Button
              className={cn(styles.btn, {
                [styles.active]: pageNumber === currentPage
              })}
              onClick={() => setPage(Number(pageNumber))}
              disabled={disabled}
            >
              {pageNumber}
            </Button>
          )}
        </li>
      ))}
    </ul>
  )
}
