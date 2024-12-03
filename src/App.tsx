import {
  Header,
  Footer,
  Layout,
  Main,
  FilterList,
  VacancyList,
  SkeletonBlock
} from '@components'
import { useFrontendVacancyStore } from '@/store'
import { Container } from '@components/UI'
import { useEffect } from 'react'

const App = () => {
  const { isLoading, vacancyList, fetchVacancyList } = useFrontendVacancyStore()

  useEffect(() => {
    fetchVacancyList()
  }, [])

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <FilterList />
          {isLoading && <SkeletonBlock />}
          {vacancyList.length && <VacancyList data={vacancyList} />}
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default App
