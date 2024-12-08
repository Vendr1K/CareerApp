import { Pagination, SkeletonBlock, VacancyList } from '@components'

import { useVacanciesStore } from '@store'
import { useEffect } from 'react'

export const PaginationVacanciesList = () => {
  const {
    isLoading,
    vacancyList,
    fetchVacancyList,
    totalPagesCount,
    currentPage,
    setPage
  } = useVacanciesStore()

  useEffect(() => {
    fetchVacancyList(currentPage)
  }, [currentPage])

  return (
    <>
      {isLoading && <SkeletonBlock />}
      {!!vacancyList.length && !isLoading && <VacancyList data={vacancyList} />}
      {!!vacancyList.length && totalPagesCount && totalPagesCount > 1 && (
        <Pagination
          currentPage={currentPage}
          disabled={isLoading}
          setPage={setPage}
          totalPagesCount={totalPagesCount}
        />
      )}
    </>
  )
}
