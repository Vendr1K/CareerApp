import { Pagination, SkeletonBlock, VacanciesList } from '@components'

import { useVacanciesStore } from '@store'
import { useEffect } from 'react'

export const PaginationVacanciesList = () => {
  const {
    isLoading,
    vacanciesList,
    fetchVacancies,
    totalPagesCount,
    currentPage,
    setPage,
    error
  } = useVacanciesStore()

  useEffect(() => {
    fetchVacancies(currentPage)
  }, [currentPage])
  return (
    <>
      {isLoading && <SkeletonBlock />}
      {error && <>{error.message}</>}
      {!!vacanciesList.length && !isLoading && (
        <VacanciesList data={vacanciesList} />
      )}
      {!!vacanciesList.length && totalPagesCount && totalPagesCount > 1 && (
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
