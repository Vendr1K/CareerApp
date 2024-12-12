import { FilterList, PaginationVacanciesList } from '@components'
import { Container } from '@components/UI'

export const Vacansies = () => {
  return (
    <Container>
      <FilterList />
      <PaginationVacanciesList />
    </Container>
  )
}
