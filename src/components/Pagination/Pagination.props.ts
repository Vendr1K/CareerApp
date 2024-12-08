import { Nullable } from '@types'

export interface PaginationProps {
  disabled: boolean
  totalPagesCount: Nullable<number>
  currentPage: number
  setPage: (nextPage: number) => void
}
