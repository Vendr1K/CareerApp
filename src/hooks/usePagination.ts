import { DOTS } from '@constans'
import { Nullable } from '@types'

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

interface usePaginationProps {
  totalPagesCount: Nullable<number>
  siblingCount?: number
  currentPage: number
}

export const usePagination = ({
  totalPagesCount,
  siblingCount = 1,
  currentPage
}: usePaginationProps) => {
  if (!totalPagesCount) return

  const totalPageNumbers = siblingCount + 5

  if (totalPageNumbers >= totalPagesCount) {
    return range(1, totalPagesCount)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPagesCount
  )

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPagesCount - 1

  const firstPageIndex = 1
  const lastPageIndex = totalPagesCount

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 2 + 2 * siblingCount
    let leftRange = range(1, leftItemCount)

    return [...leftRange, DOTS, totalPagesCount]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 2 + 2 * siblingCount
    let rightRange = range(
      totalPagesCount - rightItemCount + 1,
      totalPagesCount
    )
    return [firstPageIndex, DOTS, ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }

  return null
}
